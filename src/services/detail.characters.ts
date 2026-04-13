export interface IRsAnimeItem {
  id: number,
  name: string,
  ki: string,
  maxKi: string,
  race: string,
  gender: string,
  description: string,
  image: string,
  affiliation: string,
  deletedAt: string,
  originPlanet: {
    id: number,
    name: string,
    isDestroyed: boolean,
    description: string,
    image: string,
    deletedAt: string,
  },
  transformations: [
    {
      id: number,
      name: string,
      image: string,
      ki: string,
      maxKi: string,
      race: string,
      gender: string,
      description: string,
      affiliation: string,
      deletedAt: string,
    }
  ]
}

export interface IError {
  message: string
}

export async function API_GetDetailCharacters(name: string): Promise<IRsAnimeItem> {
  const endpoint = `https://dragonball-api.com/api/characters/${name}`
  const result = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const parseReturn = await result.json()
  return parseReturn
}