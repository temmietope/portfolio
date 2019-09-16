import React from "react"
import "./Resume.css"

const Resume = () => {
    return (
        <div className="resume">
            <h1>My Resume</h1>
            <section>
                <a href="./file/Temitope_resume.pdf" download> <img src="./images/temitope-ayodele-resume.JPG" alt="my-resume" /></a>
            </section>
        </div>
    )
}

export default Resume 