import axios from "axios"

const BASE_URL = "https://swapi.dev/api/starships/"

export const fetchAllStarships = async (page, pageSize) => {
  const url = `${BASE_URL}?page=${page}`
  const response = await axios.get(url)
  return response.data
}
