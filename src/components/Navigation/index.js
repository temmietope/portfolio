import React from "react"
import { Link } from "react-router-dom"
import * as routes from "../constants/routes"
import "./Navigation.css"

const Navigation = () => {
    const onClick = (e) => {
        // e.target.style.borderBottom = "2px solid black"
    }
    return (
        <nav>
            <Link to={routes.home}><span onClick={(e) => onClick(e)}>Home</span></Link>
            <Link to={routes.contact}><span onClick={(e) => onClick(e)}>Contact</span></Link>
            <Link to={routes.pet_projects}><span onClick={(e) => onClick(e)}>Projects</span></Link>
            <Link to={routes.experience}><span onClick={(e) => onClick(e)}>Experience</span></Link>
            <Link to={routes.resume}><span onClick={(e) => onClick(e)}>Resume</span></Link>
        </nav>
    )
}

export default Navigation