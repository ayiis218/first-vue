import Cookies from "js-cookie";
import { computed, ref, watch } from 'vue'

const config = {
  sameSite: "strict" as const,
  secure: true,
  httpOnly: true,
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

export function useLocalStorage<T>(key: string, defaultValue: T | null = null) {
  const state = ref<T | null>(defaultValue)

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
    if (event.key === key) {
      state.value = event.newValue ? JSON.parse(event.newValue) : null
    }
  })

  return state
}

interface ISession {
  name: string
  email: string
  token: string
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
