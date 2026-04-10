import { useAuth, useRegister } from "@/stores/auth"

interface IProps {
  email: string
  password: string
}

export async function GuestAuth(param: IProps) {
  const payload = {
    email: param.email,
    password: param.password,
  }

  const { login } = useAuth()
  const result = {
    token: "tokennnnnnn",
    name: "Guest",
    email: payload.email,
  }
  login(result)
}

export async function Login(param: IProps): Promise<string> {

  const { akun } = useRegister()

  if (akun.value?.email !== param.email) return "Akun anda tidak terdaftar silakan melakukan registrasi"
  if (akun.value?.password !== param.password) return "Password anda salah"

  const payload = {
    email: param.email,
    password: param.password,
  }

  const { login } = useAuth()
  const result = {
    token: "tokennnnnnn",
    name: akun.value?.username,
    email: payload.email,
  }
  login(result)
  return "Login berhasil"
}