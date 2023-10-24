import React from "react"
import logo from "../../images/starwars-logo.png"
import { NavLink } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"

export default function Navbar() {
  return (
    <div className="fixed w-full z-10">
      <nav>
        <div className="flex justify-between items-center px-12">
          <div>
            <img src={logo} alt="" className="w-[7rem]" />
          </div>
          <div>
            <ul className="flex space-x-4">
              <li className="text-white">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/people">People</NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/planets">Planets</NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/starships">Starships</NavLink>
              </li>
            </ul>
          </div>

          <SearchBar />
        </div>
      </nav>
    </div>
  )
}
