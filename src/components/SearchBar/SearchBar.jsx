import React from "react"
import { BiSearch } from "react-icons/bi"
export const SearchBar = () => {
  return (
    <div className="flex justify-between items-center text-white border-b-2 ">
      <input
        type="search"
        name="search"
        placeholder="search"
        className="outline-none bg-transparent placeholder-white "
      />

      <button type="submit">
        <BiSearch className="text-white h-4 w-4 fill-current" />
      </button>
    </div>
  )
}
