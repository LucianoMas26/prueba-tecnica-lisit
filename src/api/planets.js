import axios from "axios"

const URL = "https://swapi.dev/api/planets/"

export const fetchPlanets = () => {
  return axios.get(URL)
}
