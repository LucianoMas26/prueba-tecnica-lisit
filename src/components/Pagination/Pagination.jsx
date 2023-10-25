import React from "react"
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex justify-center mt-6 gap-10">
      <button
        className="bg-[#369fbd] text-white p-4 rounded-full hover:bg-[#49c8eb] duration-300 ease-in-out"
        onClick={handlePrevPage}
      >
        <BiSolidLeftArrow />
      </button>
      <button
        className="bg-[#369fbd] text-white p-4 rounded-full hover.bg-[#49c8eb] duration-300 ease-in-out"
        onClick={handleNextPage}
      >
        <BiSolidRightArrow />
      </button>
    </div>
  )
}

export default Pagination
