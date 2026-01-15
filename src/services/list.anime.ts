export interface IRsAnime {
   items: IRsAnimeItem[]
}

export interface IRsAnimeItem {
      id: number,
      name: string,
      ki: number,
      maxKi: string,
      race: string,
      gender: string,
      description: string,
      image: string,
      affiliation: string,
}
   
export interface IError {
   message: string
}

export async function API_GetAnime(): Promise<IRsAnimeItem[]> {
   const endpoint = "https://dragonball-api.com/api/characters"
   const result = await fetch(endpoint, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   })

   const parseReturn = await result.json()   
   return parseReturn.items
}