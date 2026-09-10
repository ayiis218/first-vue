import { useAuth, useRegister } from "@/stores/auth"
import { createToken, verifyPassword } from "./credentials"

interface IProps {
  email: string
  password: string
}

export interface ILoginResult {
  ok: boolean
  message: string
}

export async function GuestAuth(param: IProps): Promise<ILoginResult> {
  const { login } = useAuth()

  login({
    token: createToken(),
    name: "Guest",
    email: param.email || "guest@example.com",
  })

  return { ok: true, message: "Login berhasil" }
}

export async function Login(param: IProps): Promise<ILoginResult> {
  const { akun } = useRegister()
  const { login } = useAuth()

  const stored = akun.value
  if (!stored || stored.email !== param.email) {
    return { ok: false, message: "Akun anda tidak terdaftar silakan melakukan registrasi" }
  }

  const isValid = await verifyPassword(param.password, stored.salt, stored.passwordHash)
  if (!isValid) {
    return { ok: false, message: "Password anda salah" }
  }

  login({
    token: createToken(),
    name: stored.username,
    email: stored.email,
  })

  return { ok: true, message: "Login berhasil" }
}
