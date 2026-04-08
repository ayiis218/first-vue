import Cookies from "js-cookie";

export const useAuthStore = () => {
  const setToken = (token: string) => {
    Cookies.set("token", token)
  }

  const getToken = () => {
    return Cookies.get("token")
  }

  const removeToken = () => {
    Cookies.remove("token")
  }

  return {
    setToken,
    getToken,
    removeToken,
  }
}
