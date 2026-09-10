// Utilitas kredensial untuk alur autentikasi demo di aplikasi ini.
//
// PENTING: hashing di sisi klien BUKAN pengganti autentikasi server. Tujuannya
// hanya agar halaman demo tidak pernah menyimpan password mentah di localStorage.
// Untuk produksi, verifikasi kredensial harus dilakukan backend dan token sesi
// sebaiknya dikirim lewat cookie HttpOnly.

const encoder = new TextEncoder()

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function createSalt(): string {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  return toHex(bytes.buffer)
}

export function createToken(): string {
  return crypto.randomUUID()
}

export async function hashPassword(password: string, salt: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(`${salt}:${password}`))
  return toHex(digest)
}

// Perbandingan panjang tetap supaya waktu eksekusi tidak membocorkan isi hash.
function isEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false

  let diff = 0
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return diff === 0
}

export async function verifyPassword(
  password: string,
  salt: string,
  expectedHash: string,
): Promise<boolean> {
  return isEqual(await hashPassword(password, salt), expectedHash)
}
