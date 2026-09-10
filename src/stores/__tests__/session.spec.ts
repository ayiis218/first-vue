import { describe, it, expect, beforeEach } from 'vitest'
import { getSession, isAuthenticated, readSession } from '../session'

describe('session', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('mengembalikan null saat belum ada sesi tersimpan', () => {
    expect(readSession()).toBeNull()
    expect(isAuthenticated()).toBe(false)
  })

  it('membaca sesi yang tersimpan di localStorage', () => {
    localStorage.setItem(
      'session',
      JSON.stringify({ name: 'Ayi', email: 'ayi@example.com', token: 'abc' }),
    )

    expect(readSession()?.email).toBe('ayi@example.com')
    expect(isAuthenticated()).toBe(true)
  })

  it('tidak melempar error saat isi localStorage rusak', () => {
    localStorage.setItem('session', 'bukan json')

    expect(readSession()).toBeNull()
    expect(isAuthenticated()).toBe(false)
  })

  it('getSession mengembalikan token, atau string kosong bila tidak ada sesi', async () => {
    await expect(getSession()).resolves.toBe('')

    localStorage.setItem(
      'session',
      JSON.stringify({ name: 'Ayi', email: 'ayi@example.com', token: 'abc' }),
    )
    await expect(getSession()).resolves.toBe('abc')
  })
})
