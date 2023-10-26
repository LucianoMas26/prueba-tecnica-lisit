import React from "react"
import logo from "../../images/starwars-logo.png"

import { SearchBar } from "../SearchBar/SearchBar"

export default function Navbar({ onSearch }) {
  return (
    <div className="fixed w-full z-10">
      <nav>
        <div className="flex justify-between items-center px-12">
          <div>
            <img src={logo} alt="" className="w-[7rem]" />
          </div>

          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  )
}
