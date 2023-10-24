import axios from "axios"

const URL = "https://swapi.dev/api/people/"

export const fetchPeople = () => {
  return axios.get(URL)
}
