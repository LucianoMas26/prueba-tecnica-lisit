export const Categories = ({ onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category)
  }

  return (
    <div className="flex justify-around w-full px-10">
      <div
        className="bg-black bg-opacity-50 text-white py-4 px-6 -skew-x-6 uppercase rounded-xl cursor-pointer hover:text-[#49c8eb] hover:shadow-[#49c8eb] hover:shadow-md duration-300 ease-in-out"
        onClick={() => handleCategoryClick("People")}
      >
        People
      </div>
      <div
        className="bg-black bg-opacity-50 text-white py-4 px-6 -skew-x-6 uppercase rounded-xl cursor-pointer hover:text-[#49c8eb] hover:shadow-[#49c8eb] hover:shadow-md duration-300 ease-in-out"
        onClick={() => handleCategoryClick("Planets")}
      >
        Planets
      </div>
      <div
        className="bg-black bg-opacity-50 text-white py-4 px-6 -skew-x-6 uppercase rounded-xl cursor-pointer hover:text-[#49c8eb] hover:shadow-[#49c8eb] hover:shadow-md duration-300 ease-in-out"
        onClick={() => handleCategoryClick("Starships")}
      >
        Starships
      </div>
    </div>
  )
}
