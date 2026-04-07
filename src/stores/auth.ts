import Cookies from "js-cookie";

export const useAuthStore = () => {
  const token = Cookies.get("token");

  return {
    isAuthenticated: token,
  }
}
