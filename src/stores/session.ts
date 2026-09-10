const SESSION_KEY = 'session'

interface IStoredSession {
  name: string
  email: string
  token: string
}

export function readSession(): IStoredSession | null {
  const raw = localStorage.getItem(SESSION_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as IStoredSession
  } catch {
    return null
  }
}

export function isAuthenticated(): boolean {
  return readSession() !== null
}

export async function getSession(): Promise<string> {
  return readSession()?.token ?? ''
}
