import React from "react"
import About from "../About"
import Contact from "../Contact"
import Welcome from "../Welcome"
import Organizations from "../Organizations"
import TechStack from "../TechStack";
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Welcome />
            <About />
            <TechStack/>
            <Organizations />
            <Contact />

        </div>
    )
}

export default Home