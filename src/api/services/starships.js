import axios from "axios"

const BASE_URL = "https://swapi.dev/api/starships/"

export const fetchAllStarships = async () => {
  let allStarships = []
  let nextUrl = BASE_URL

  while (nextUrl) {
    const response = await axios.get(nextUrl)
    allStarships = [...allStarships, ...response.data.results]
    nextUrl = response.data.next
  }

  return allStarships
}
