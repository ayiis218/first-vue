import { useAuth, useRegister } from "@/stores/auth"

interface IProps {
  username: string
  email: string
  password: string
  confirm_password: string
}

export function SimpleRegister(param: IProps) {
  const payload = {
    username: param.username,
    email: param.email,
    password: param.password,
  }

  const { register } = useRegister()
  register(payload)
}