import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import loading from "../../images/starwars-loading.gif"
import background from "../../images/starwars-detail.jpg"
import styles from "./Detail.module.css"
import { Link } from "react-router-dom"

export const Detail = () => {
  const { detailId } = useParams()

  const [elementDetails, setElementDetails] = useState(null)

  useEffect(() => {
    const fetchAllElements = async () => {
      try {
        const [peopleResponse, planetsResponse, starshipsResponse] =
          await Promise.all([
            fetch("https://swapi.dev/api/people/"),
            fetch("https://swapi.dev/api/planets/"),
            fetch("https://swapi.dev/api/starships/")
          ])

        const [peopleData, planetsData, starshipsData] = await Promise.all([
          peopleResponse.json(),
          planetsResponse.json(),
          starshipsResponse.json()
        ])

        const allElementData = [
          ...peopleData.results,
          ...planetsData.results,
          ...starshipsData.results
        ]

        const element = allElementData.find(
          (element) => element.name === detailId
        )

        setElementDetails(element)
      } catch (error) {
        console.error("Error fetching element details:", error)
      }
    }

    fetchAllElements()
  }, [detailId])

  return (
    <div className={styles.containerDetail}>
      {elementDetails ? (
        <div className={styles.content}>
          <Link to="/">
            <button className={styles.goBackButton}>Go Back</button>
          </Link>
          <div className="space-y-2">
            <h1 className="text-5xl uppercase">{elementDetails.name}</h1>
            {elementDetails.gender && (
              <p className="text-[#49c8eb] font-semibold text-lg">
                Gender: {elementDetails.gender}
              </p>
            )}
            {elementDetails.birth_year && (
              <p className="text-[#49c8eb] font-semibold text-lg">
                Birth: {elementDetails.birth_year}
              </p>
            )}
            {elementDetails.mass && (
              <p className="text-[#49c8eb] font-semibold text-lg">
                Mass: {elementDetails.mass}
              </p>
            )}
            {elementDetails.skin_color && (
              <p className="text-[#49c8eb] font-semibold text-lg">
                Skin color: {elementDetails.skin_color}
              </p>
            )}
            {elementDetails.eye_color && (
              <p className="text-[#49c8eb]">
                Eyes color: {elementDetails.eye_color}
              </p>
            )}
            {elementDetails.diameter && (
              <p className="text-[#49c8eb]">
                Diameter: {elementDetails.diameter}
              </p>
            )}
            {elementDetails.climate && (
              <p className="text-[#49c8eb]">
                Climate: {elementDetails.climate}
              </p>
            )}
            {elementDetails.terrain && (
              <p className="text-[#49c8eb]">
                Terrain: {elementDetails.terrain}
              </p>
            )}
            {elementDetails.population && (
              <p className="text-[#49c8eb]">
                Population: {elementDetails.population}
              </p>
            )}
            {elementDetails.model && (
              <p className="text-[#49c8eb]">Model: {elementDetails.model}</p>
            )}
            {elementDetails.manufacturer && (
              <p className="text-[#49c8eb]">
                Manufacturer: {elementDetails.manufacturer}
              </p>
            )}
            {elementDetails.cost_in_credits && (
              <p className="text-[#49c8eb]">
                Cost: {elementDetails.cost_in_credits}
              </p>
            )}
            {elementDetails.length && (
              <p className="text-[#49c8eb]">Length: {elementDetails.length}</p>
            )}
            {elementDetails.starship_class && (
              <p className="text-[#49c8eb]">
                Class: {elementDetails.starship_class}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen absolute inset-0">
          <img src={loading} alt="" className="w-[13rem]" />
        </div>
      )}
      <div className={styles.blackBackground}></div>
      <div className={styles.imageBackground}>
        <img src={background} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
