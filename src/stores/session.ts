import Cookies from 'js-cookie'

export async function getSession() {
  const cookies = Cookies.get('session')
  return cookies
}
