import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"

export const Modal = ({ onClose, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    onSearch(searchQuery)
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white flex justify-around items-center p-4 rounded-lg text-black ">
        <input
          type="search"
          name="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <BiSearch className="text-black h-5 w-5" />
        </button>
        <button onClick={onClose}>
          <GrFormClose className="text-black h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
