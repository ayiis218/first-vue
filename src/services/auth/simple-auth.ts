import { useAuth } from "@/stores/auth"

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