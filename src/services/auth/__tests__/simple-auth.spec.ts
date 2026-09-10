import { describe, it, expect, beforeEach, vi } from 'vitest'

// Modul menyimpan ref per kunci di level modul, jadi tiap test memuat ulang
// modulnya supaya state antar test tidak saling bocor.
async function loadAuthModules() {
  vi.resetModules()
  localStorage.clear()

  const [simpleAuth, simpleRegister, store] = await Promise.all([
    import('../simple-auth'),
    import('../simple-register'),
    import('@/stores/auth'),
  ])

  return { ...simpleAuth, ...simpleRegister, ...store }
}

const akun = {
  username: 'Ayi',
  email: 'ayi@example.com',
  password: 'rahasia123',
  confirm_password: 'rahasia123',
}

describe('autentikasi demo', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('tidak pernah menyimpan password mentah saat registrasi', async () => {
    const { SimpleRegister } = await loadAuthModules()
    await SimpleRegister(akun)

    const stored = localStorage.getItem('register') ?? ''

    expect(stored).not.toContain(akun.password)
    expect(JSON.parse(stored)).toMatchObject({
      username: akun.username,
      email: akun.email,
    })
    expect(JSON.parse(stored)).not.toHaveProperty('password')
    expect(JSON.parse(stored).passwordHash).toMatch(/^[0-9a-f]{64}$/)
  })

  it('menolak email yang belum terdaftar', async () => {
    const { Login } = await loadAuthModules()

    const result = await Login({ email: 'lain@example.com', password: 'apa saja' })

    expect(result.ok).toBe(false)
    expect(result.message).toContain('tidak terdaftar')
    expect(localStorage.getItem('session')).toBeNull()
  })

  it('menolak password yang salah', async () => {
    const { SimpleRegister, Login } = await loadAuthModules()
    await SimpleRegister(akun)

    const result = await Login({ email: akun.email, password: 'salah' })

    expect(result.ok).toBe(false)
    expect(result.message).toBe('Password anda salah')
    expect(localStorage.getItem('session')).toBeNull()
  })

  it('menerima password yang benar dan membuat token acak', async () => {
    const { SimpleRegister, Login } = await loadAuthModules()
    await SimpleRegister(akun)

    const result = await Login({ email: akun.email, password: akun.password })

    expect(result.ok).toBe(true)

    const session = JSON.parse(localStorage.getItem('session') ?? '{}')
    expect(session.name).toBe(akun.username)
    expect(session.email).toBe(akun.email)
    expect(session.token).toMatch(/^[0-9a-f-]{36}$/)
  })

  it('memberi token berbeda pada setiap login', async () => {
    const { SimpleRegister, Login } = await loadAuthModules()
    await SimpleRegister(akun)

    await Login({ email: akun.email, password: akun.password })
    const first = JSON.parse(localStorage.getItem('session') ?? '{}').token

    await Login({ email: akun.email, password: akun.password })
    const second = JSON.parse(localStorage.getItem('session') ?? '{}').token

    expect(first).not.toBe(second)
  })

  it('mempertahankan password lama saat profil diubah tanpa mengisi password', async () => {
    const { SimpleRegister, SimpleUpdateProfile, Login } = await loadAuthModules()
    await SimpleRegister(akun)
    await Login({ email: akun.email, password: akun.password })

    await SimpleUpdateProfile({ username: 'Ayi Solahudin', email: akun.email })

    const session = JSON.parse(localStorage.getItem('session') ?? '{}')
    expect(session.name).toBe('Ayi Solahudin')

    const result = await Login({ email: akun.email, password: akun.password })
    expect(result.ok).toBe(true)
  })

  it('mengganti password ketika diisi saat ubah profil', async () => {
    const { SimpleRegister, SimpleUpdateProfile, Login } = await loadAuthModules()
    await SimpleRegister(akun)
    await Login({ email: akun.email, password: akun.password })

    await SimpleUpdateProfile({ username: akun.username, email: akun.email, password: 'passwordbaru' })

    await expect(Login({ email: akun.email, password: akun.password })).resolves.toMatchObject({
      ok: false,
    })
    await expect(Login({ email: akun.email, password: 'passwordbaru' })).resolves.toMatchObject({
      ok: true,
    })
  })

  it('login tamu tidak butuh kredensial tersimpan', async () => {
    const { GuestAuth } = await loadAuthModules()

    const result = await GuestAuth({ email: '', password: '' })

    expect(result.ok).toBe(true)
    expect(JSON.parse(localStorage.getItem('session') ?? '{}').name).toBe('Guest')
  })
})
