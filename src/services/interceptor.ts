import { getSession } from "@/stores/session";

interface IInterceptorProps {
   endpoint: string;
   customHeader?: Record<string, string>;
   fetchOption?: Record<string, string>;
}

export async function interceptorAPI({
  endpoint,
  customHeader = {},
  fetchOption = {},
}: Readonly<IInterceptorProps>) {
   const token = await getSession()
   
   const headers = {
      ...customHeader,
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      'x-log-id': crypto.randomUUID()
   }
   const result = await fetch(endpoint, { ...fetchOption, headers })
   if (result.status === 401 || result.status === 403) {
      // TODO: redirect to login page
      window.location.href = '/auth/login'
   }  
   try {
      return result.json()
   } catch (error) {
      console.error(error)
      return null
   }
    
}