import "./Navbar.css"
import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"
import useTheme from "../hooks/useTheme"

export default function Navbar() {
  const { color } = useTheme()
  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link className="brand" to="/">
          <img src="/img/ts-zoom.png" alt="logo" />
          <h1>TelkomCookBook</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
