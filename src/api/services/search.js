import axios from "axios"

const BASE_URL = "https://swapi.dev/api/"

export const searchAll = async (query) => {
  const categories = ["people", "planets", "starships"]
  const results = []

  for (const category of categories) {
    const url = `${BASE_URL}${category}/?search=${query}`
    const response = await axios.get(url)
    results.push({
      category,
      data: response.data.results
    })
  }

  return results
}
