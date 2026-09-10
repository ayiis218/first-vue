import Cookies from "js-cookie";
import { computed, ref, watch, type Ref } from 'vue'

// Catatan: HttpOnly tidak bisa disetel dari JavaScript, jadi opsi itu tidak dipakai.
// `secure` hanya diaktifkan di https agar cookie tetap tersimpan saat development di http.
const config = {
  sameSite: "strict" as const,
  secure: window.location.protocol === "https:",
}

export const useCookiesStore = () => {
  const setCookie = (key: string, value: string) => {
    Cookies.set(key, value, config)
  }

  const getCookie = (key: string) => {
    return Cookies.get(key)
  }

  const removeCookie = (key: string) => {
    Cookies.remove(key)
  }

  return {
    setCookie,
    getCookie,
    removeCookie,
  }
}

// Satu ref per kunci, dipakai bersama semua komponen. Tanpa ini setiap pemanggil
// mendapat ref sendiri, sehingga perubahan di satu komponen tidak terlihat di
// komponen lain dan tiap pemanggilan menambah listener 'storage' yang tak pernah dilepas.
const stores = new Map<string, Ref<unknown>>()

export function useLocalStorage<T>(key: string, defaultValue: T | null = null): Ref<T | null> {
  const existing = stores.get(key)
  if (existing) return existing as Ref<T | null>

  const state = ref<T | null>(defaultValue) as Ref<T | null>

  const stored = localStorage.getItem(key)
  if (stored) {
    try {
      state.value = JSON.parse(stored)
    } catch {
      state.value = defaultValue
    }
  }

  watch(state, (val) => {
    if (val === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val))
    }
  },
    { deep: true }
  )

  window.addEventListener('storage', (event) => {
    if (event.key !== key) return

    try {
      state.value = event.newValue ? JSON.parse(event.newValue) : null
    } catch {
      state.value = null
    }
  })

  stores.set(key, state)
  return state
}

export interface ISession {
  name: string
  email: string
  token: string
}

// Password tidak pernah disimpan apa adanya, hanya salt dan hash-nya.
export interface IStoredCredential {
  username: string
  email: string
  salt: string
  passwordHash: string
}

export function useAuth() {
  const session = useLocalStorage<ISession>("session", null)

  const login = (data: ISession) => {
    session.value = data
  }

  const logout = () => {
    session.value = null
  }

  return {
    session,
    isAuthenticated: computed(() => !!session.value),
    login,
    logout
  }
}

export function useRegister() {
  const akun = useLocalStorage<IStoredCredential>("register", null)

  const register = (data: IStoredCredential) => {
    akun.value = data
  }

  return {
    akun,
    isRegistered: computed(() => !!akun.value),
    register,
  }
}
