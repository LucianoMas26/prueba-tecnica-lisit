import React from "react"
import landingImage from "../../images/starwars-landing.jpg"
import { HomeTitle } from "../HomeTitle/HomeTitle"

export const Home = () => {
  return (
    <main>
      <div className="h-screen w-full relative">
        <img
          src={landingImage}
          alt=""
          className="object-cover h-full w-full brightness-50"
        />
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2  px-10 w-[55%]">
          <HomeTitle />
        </div>
      </div>
    </main>
  )
}
