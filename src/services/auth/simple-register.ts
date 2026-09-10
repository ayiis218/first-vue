import { useAuth, useRegister } from "@/stores/auth"
import { createSalt, hashPassword } from "./credentials"

interface IRegisterProps {
  username: string
  email: string
  password: string
  confirm_password: string
}

interface IUpdateProfileProps {
  username: string
  email: string
  password?: string
}

export async function SimpleRegister(param: IRegisterProps) {
  const { register } = useRegister()
  const salt = createSalt()

  register({
    username: param.username,
    email: param.email,
    salt,
    passwordHash: await hashPassword(param.password, salt),
  })
}

// Password hanya diganti bila diisi, sehingga menyimpan perubahan nama atau email
// tidak diam-diam menimpa kredensial yang sudah ada.
export async function SimpleUpdateProfile(param: IUpdateProfileProps) {
  const { akun, register } = useRegister()
  const { session, login } = useAuth()

  const current = akun.value
  if (!current) return

  const next = { ...current, username: param.username, email: param.email }

  if (param.password) {
    next.salt = createSalt()
    next.passwordHash = await hashPassword(param.password, next.salt)
  }

  register(next)

  if (session.value) {
    login({ ...session.value, name: param.username, email: param.email })
  }
}
