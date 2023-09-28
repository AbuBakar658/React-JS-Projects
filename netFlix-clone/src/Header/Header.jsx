import React from 'react'
import pic from '../Netflix_2015_logo.png'
import { Link } from 'react-router-dom'
import {RiSearchLine} from "react-icons/ri"
const Header = () => {
  return (
  <nav className="header">
        <img src={pic} alt="logo" />
        <div>
        <Link to="/">Home</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recently">Recently Added</Link>
        <Link to="/mylist">My List</Link>
        </div>
        <RiSearchLine/>
    </nav>
  )
}

export default Header