import { BiSolidLeftArrow } from "react-icons/bi"

const PreviousButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#369fbd] text-white p-4 rounded-full hover:bg-[#49c8eb] duration-300 ease-in-out"
    >
      <BiSolidLeftArrow />
    </button>
  )
}
export default PreviousButton
