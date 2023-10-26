import axios from "axios"

const BASE_URL = "https://swapi.dev/api/planets/"

export const fetchAllPlanets = async (page, pageSize) => {
  const url = `${BASE_URL}?page=${page}`
  const response = await axios.get(url)
  return response.data
}
