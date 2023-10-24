import axios from "axios"

const URL = "https://swapi.dev/api/starships/"

export const fetchStarships = () => {
  return axios.get(URL)
}
