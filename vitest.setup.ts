// Node 22+ mengekspos `localStorage` eksperimental yang menutupi milik jsdom dan
// tidak punya getItem/setItem. Pasang implementasi in-memory bila itu yang terjadi,
// supaya kode yang membaca sesi bisa diuji apa adanya.
function createMemoryStorage(): Storage {
  const store = new Map<string, string>()

  return {
    get length() {
      return store.size
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null
    },
    getItem(key: string) {
      return store.has(key) ? (store.get(key) as string) : null
    },
    setItem(key: string, value: string) {
      store.set(key, String(value))
    },
    removeItem(key: string) {
      store.delete(key)
    },
    clear() {
      store.clear()
    },
  } as Storage
}

const current = globalThis.localStorage as Storage | undefined

if (typeof current?.getItem !== 'function') {
  const memoryStorage = createMemoryStorage()

  Object.defineProperty(globalThis, 'localStorage', {
    value: memoryStorage,
    configurable: true,
    writable: true,
  })

  if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'localStorage', {
      value: memoryStorage,
      configurable: true,
      writable: true,
    })
  }
}

// jsdom tidak mengimplementasikan matchMedia. Komponen yang memakai
// useReducedMotion/useCursorTilt/useMagnetic memanggilnya saat mounted,
// jadi perlu stub minimal supaya mount tidak crash di test.
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }) as MediaQueryList
}
