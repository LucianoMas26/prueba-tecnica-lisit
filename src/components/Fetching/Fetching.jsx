import React, { useEffect, useState } from "react"
import { fetchStarships } from "../../api/starships"

function StarshipsComponent() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    fetchStarships()
      .then((response) => {
        const starshipsData = response.data
        setStarships(starshipsData.results)
      })
      .catch((error) => {
        console.error("Error while fetching starships data:", error)
      })
  }, [])

  return (
    <div>
      <h1>Naves</h1>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default StarshipsComponent
