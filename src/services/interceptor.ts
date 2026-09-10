import { getSession } from "@/stores/session";

interface IInterceptorProps {
   endpoint: string;
   customHeader?: Record<string, string>;
   fetchOption?: RequestInit;
}

export async function interceptorAPI({
  endpoint,
  customHeader = {},
  fetchOption = {},
}: Readonly<IInterceptorProps>) {
   const token = await getSession()

   const headers = {
      ...customHeader,
      ...(token ? { Authorization: "Bearer " + token } : {}),
      "Content-Type": "application/json",
      'x-log-id': crypto.randomUUID()
   }

   const result = await fetch(endpoint, { ...fetchOption, headers })
   if (result.status === 401 || result.status === 403) {
      localStorage.removeItem('session')
      window.location.href = '/login'
      return null
   }

   try {
      return await result.json()
   } catch (error) {
      console.error(error)
      return null
   }
}
