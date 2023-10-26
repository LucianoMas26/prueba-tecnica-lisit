import { Route, Routes, useLocation } from "react-router-dom"
import { useState } from "react"
import { Home } from "./components/Home/Home"
import { Detail } from "./components/Detail/Detail"
import Navbar from "./components/Navbar/Navbar"

function App() {
  const [searchResults, setSearchResults] = useState([])
  const location = useLocation()

  const handleSearch = (results) => {
    setSearchResults(results)
  }

  const isNavbarVisible = location.pathname !== "/detail"

  return (
    <div>
      {isNavbarVisible && <Navbar onSearch={handleSearch} />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
