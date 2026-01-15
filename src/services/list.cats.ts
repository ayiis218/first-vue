export async function API_GetCats() {
   const endpoint ="https://api.thecatapi.com/v1/images/search"
   const result = await fetch(endpoint, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   })
   return await result.json()
}