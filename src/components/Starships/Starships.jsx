import { useState, useEffect } from "react"
import Pagination from "../Pagination/Pagination"
import cardImage from "../../images/starwars-card.jpg"
import Loading from "../../images/starwars-loading.gif"
import { fetchAllStarships } from "../../api/services/starships"

export const Starships = () => {
  const [starships, setStarships] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allStarshipsData = await fetchAllStarships()
        setStarships(allStarshipsData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching starships:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * 4
  const endIndex = startIndex + 4
  const pageStarships = starships.slice(startIndex, endIndex)

  return (
    <div>
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <img src={Loading} alt="" className="w-[13rem]" />
        </div>
      ) : (
        <div>
          <ul className="grid grid-cols-4 gap-16 px-12 mt-[2rem]">
            {pageStarships.map((starship, index) => (
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
            totalPages={Math.ceil(starships.length / 4)}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}
