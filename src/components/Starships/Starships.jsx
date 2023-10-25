import React, { useState, useEffect } from "react"
import Pagination from "../Pagination/Pagination"
import cardImage from "../../images/starwars-card.jpg"
import Loading from "../../images/starwars-loading.gif"
import { fetchAllStarships } from "../../api/services/starships"
import NextButton from "../NextButton/NextButton"
import PreviousButton from "../PreviousButton/PreviousButton"
export const Starships = () => {
  const [starships, setStarships] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [pageSize] = useState(4) // Number of elements per internal page
  const [internalPage, setInternalPage] = useState(1) // Current internal page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const starshipsData = await fetchAllStarships(currentPage, pageSize)
        setStarships(starshipsData.results)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching starships:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage, pageSize])

  const handleInternalPageChange = (page) => {
    setInternalPage(page)
  }

  const handleExternalPageChange = (page) => {
    setCurrentPage(page)
    setInternalPage(1) // Reset internal page when navigating to a new external page.
  }

  // Calculate the start and end index for the internal page
  const internalPageStartIndex = (internalPage - 1) * pageSize
  const internalPageEndIndex = internalPageStartIndex + pageSize
  return (
    <div>
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <img src={Loading} alt="" className="w-[13rem]" />
        </div>
      ) : (
        <div className="relative">
          {internalPage > 1 && (
            <div className="fixed left-2 top-1/2 transform -translate-y-1/2">
              <PreviousButton
                onClick={() => handleInternalPageChange(internalPage - 1)}
              />
            </div>
          )}
          {internalPage < Math.ceil(starships.length / pageSize) && (
            <div className="fixed right-2 top-1/2 transform -translate-y-1/2">
              <NextButton
                onClick={() => handleInternalPageChange(internalPage + 1)}
              />
            </div>
          )}

          <ul className="grid grid-cols-4 gap-16 px-24 mt-[2rem]">
            {starships
              .slice((internalPage - 1) * pageSize, internalPage * pageSize)
              .map((starship, index) => (
                <div
                  key={starship.name + index}
                  className=" -skew-x-12 rounded-xl bg-opacity-50 text-white relative p-4 hover:shadow-lg hover:brightness-90 duration-300 ease-in-out w-full h-[14rem] bg-center bg-cover"
                  style={{ backgroundImage: `url(${cardImage})` }}
                >
                  <h3 className="text-white  absolute top-4 left-0 w-full skew-x-12 uppercase text-lg px-4 text-center">
                    {starship.name}
                  </h3>
                  <p className="text-[#49c8eb] absolute bottom-4 left-0 skew-x-12 text-center w-full">
                    {starship.cost_in_credits}
                  </p>
                </div>
              ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(starships.length / pageSize)}
            onPageChange={handleExternalPageChange}
          />
        </div>
      )}
    </div>
  )
}
