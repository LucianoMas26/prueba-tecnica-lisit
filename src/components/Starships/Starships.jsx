import React, { useEffect, useState } from "react"
import { fetchStarships } from "../../api/starships"
import starshipBg from "../../images/starships-bg.jpg"
import { starshipImages } from "../../helpers/images"
import styles from "./Starship.module.css"
export const Starships = () => {
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
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen relative"
      style={{ backgroundImage: `url(${starshipBg})` }}
    >
      <div className="pt-16 text-white ">
        <ul className="grid grid-cols-4 gap-10 px-12 mt-[2rem]">
          {starships.slice(0, 4).map((starship) => (
            <li
              key={starship.name}
              className="relative text-center -skew-x-12 brightness-75 hover:shadow-lg hover:brightness-90 duration-300 ease-in-out "
            >
              <img
                src={starshipImages[starship.name]}
                alt={starship.name}
                className="w-full h-[25rem] object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-white absolute top-4 left-0 w-full skew-x-12 uppercase text-xl px-2">
                {starship.name}
              </h3>
              <p className="text-[#49c8eb] absolute bottom-4 left-0 w-full skew-x-12">
                {starship.cost_in_credits}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
