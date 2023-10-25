import React from "react"
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6 gap-10">
      <button
        className="bg-[#369fbd] text-white px-4 py-2 rounded-xl hover:bg-[#49c8eb] duration-300 ease-in-out"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="bg-[#369fbd] text-white px-6 py-2 rounded-xl hover:bg-[#49c8eb] duration-300 ease-in-out"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
