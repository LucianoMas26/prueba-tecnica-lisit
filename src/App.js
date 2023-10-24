import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { Planets } from "./components/Planets/Planets"
import { People } from "./components/People/People"
import { Starships } from "./components/Starships/Starships"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        {/* <Route path="/detail/:detailId" element={<Detail />} */}
      </Routes>
    </div>
  )
}

export default App
