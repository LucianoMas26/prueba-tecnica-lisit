import React, { useState, useEffect } from "react"
import { BiSearch } from "react-icons/bi"
import { searchAll } from "../../api/services/search"
import { GiHamburgerMenu } from "react-icons/gi"
import { Modal } from "../Modal/Modal"

export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleHamburgerClick = () => {
    setIsModalOpen(true)
  }

  const handleSearch = async () => {
    const results = await searchAll(searchQuery)
    onSearch(results)
    setSearchQuery("")
  }

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="flex justify-between items-center text-white ">
      {isSmallScreen ? (
        <button type="button" onClick={handleHamburgerClick}>
          <GiHamburgerMenu className="text-white h-6 w-6 fill-current" />
        </button>
      ) : (
        <div className="border-b-2">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="outline-none bg-transparent placeholder-white "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            <BiSearch className="text-white h-4 w-4 fill-current" />
          </button>
        </div>
      )}

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSearch={(query) => {
            setSearchQuery(query)
            handleSearch()
          }}
        />
      )}
    </div>
  )
}
