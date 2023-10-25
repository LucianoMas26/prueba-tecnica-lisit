import React, { useState } from "react"
import landingImage from "../../images/starwars-landing.jpg"
import { Categories } from "../Categories/Categories"
import { Starships } from "../Starships/Starships"

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("People")

  const handleCategoryChange = (category) => {
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
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 w-full">
          <Categories onCategoryChange={handleCategoryChange} />
        </div>
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          {selectedCategory === "Starships" && <Starships currentPage={1} />}
        </div>
      </div>
    </main>
  )
}
