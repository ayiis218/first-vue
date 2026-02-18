interface IProps {
   email: string
   password: string
}

export async function API_Login(param: IProps) {
   const payload = {
      email: param.email,
      project_slug: "",
      project_id: "",
   }
   const endpoint = import.meta.env.VITE_API_URL ?? ""
   const result = await fetch(endpoint, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
   })

   const parseReturn = await result.json()
   if (parseReturn.status === 400 || parseReturn.status === 401) {
      console.log("Unauthorized")
      return parseReturn
   }
   try {
      if (parseReturn.status === 200) {
         return parseReturn
      }
   } catch (error) {
      console.log(error)
   }
   return parseReturn
}