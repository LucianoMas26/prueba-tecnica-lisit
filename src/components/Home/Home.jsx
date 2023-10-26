import React, { useState } from "react"
import landingImage from "../../images/starwars-landing.jpg"
import { Categories } from "../Categories/Categories"
import { Starships } from "../Starships/Starships"
import { People } from "../People/People"
import { Planets } from "../Planets/Planets"

export const Home = ({ searchResults, setSearchResults }) => {
  const [selectedCategory, setSelectedCategory] = useState("People")

  const handleCategoryChange = (category) => {
    setSearchResults([])
    setSelectedCategory(category)
  }

  return (
    <main>
      <div className="h-screen w-full relative">
        <img
          src={landingImage}
          alt=""
          className="object-cover h-full w-full brightness-50"
        />
        <div className="absolute top-[24%] sm:top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 sm:w-full">
          <Categories onCategoryChange={handleCategoryChange} />
        </div>
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          {selectedCategory === "Starships" && (
            <Starships currentPage={1} searchResults={searchResults} />
          )}
          {selectedCategory === "People" && (
            <People currentPage={1} searchResults={searchResults} />
          )}
          {selectedCategory === "Planets" && (
            <Planets currentPage={1} searchResults={searchResults} />
          )}
        </div>
      </div>
    </main>
  )
}
