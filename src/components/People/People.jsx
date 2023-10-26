import React, { useState, useEffect } from "react"
import Pagination from "../Pagination/Pagination"
import cardImage from "../../images/starwars-people.jpg"
import Loading from "../../images/starwars-loading.gif"
import { fetchAllPeople } from "../../api/services/people"
import NextButton from "../NextButton/NextButton"
import PreviousButton from "../PreviousButton/PreviousButton"
import { Link } from "react-router-dom"

export const People = ({ searchResults }) => {
  const [people, setPeople] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [pageSize, setPageSize] = useState(4)
  const [internalPage, setInternalPage] = useState(1)
  const [loadingCard, setLoadingCard] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingCard(true)
        const peopleData = await fetchAllPeople(currentPage, pageSize)
        setPeople(peopleData.results)
        setLoadingCard(false)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching people:", error)
        setLoadingCard(false)
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage, pageSize])

  const updatePageSize = () => {
    if (window.innerWidth >= 1024) {
      setPageSize(4)
    } else if (window.innerWidth >= 640) {
      setPageSize(2)
    } else {
      setPageSize(1)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", updatePageSize)
    return () => {
      window.removeEventListener("resize", updatePageSize)
    }
  }, [])
  const handleInternalPageChange = (page) => {
    setInternalPage(page)
  }

  const handleExternalPageChange = (page) => {
    setCurrentPage(page)
    setInternalPage(1)
  }

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
          {internalPage < Math.ceil(people.length / pageSize) && (
            <div className="fixed right-2 top-1/2 transform -translate-y-1/2">
              <NextButton
                onClick={() => handleInternalPageChange(internalPage + 1)}
              />
            </div>
          )}

          <ul
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 px-24 mt-[2rem]`}
          >
            {searchResults.length > 0
              ? searchResults.map(
                  (item, index) =>
                    item.data.length > 0 && (
                      <Link
                        to={`/detail/${item.data[0].name}`}
                        key={`item-${index}`}
                      >
                        <div
                          className="hover:scale-105 -skew-x-12 rounded-xl bg-opacity-50 text-white relative p-4 hover:shadow-lg hover:brightness-90 duration-300 ease-in-out w-full h-[14rem] bg-center bg-cover"
                          style={{ backgroundImage: `url(${cardImage})` }}
                        >
                          <h3 className="text-white  absolute top-4 left-0 w-full skew-x-12 uppercase text-lg px-4 text-center">
                            {item.data[0].name}
                          </h3>
                        </div>
                      </Link>
                    )
                )
              : people
                  .slice((internalPage - 1) * pageSize, internalPage * pageSize)
                  .map((people, index) => (
                    <Link to={`/detail/${people.name}`} key={`item-${index}`}>
                      <div
                        className="hover:scale-105 -skew-x-12 rounded-xl bg-opacity-50 text-white relative p-4 hover:shadow-lg hover:brightness-90 duration-300 ease-in-out w-full h-[14rem] bg-center bg-cover"
                        style={{ backgroundImage: `url(${cardImage})` }}
                      >
                        <h3 className="text-white  absolute top-4 left-0 w-full skew-x-12 uppercase text-lg px-4 text-center">
                          {people.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(searchResults.length / pageSize)}
            onPageChange={handleExternalPageChange}
          />
        </div>
      )}
    </div>
  )
}
