import axios from "axios"

const BASE_URL = "https://swapi.dev/api/people/"

export const fetchAllPeople = async () => {
  let allPeople = []
  let nextUrl = BASE_URL

  while (nextUrl) {
    const response = await axios.get(nextUrl)
    allPeople = [...allPeople, ...response.data.results]
    nextUrl = response.data.next
  }

  return allPeople
}
