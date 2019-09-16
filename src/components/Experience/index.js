import React, { useState, useEffect } from "react";
import { experienceList } from "./experienceList";
import "./Experience.css"

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        setExperiences(experienceList)
    }, [experiences])

    const renderExperienceList = () => {
        return (
            experiences.map((experience) => {
                return (
                    <article key={experience.id}>
                        <h5>{experience.position}</h5>
                        <p className="org">@ {experience.organization}</p>
                        <span>{experience.duration}</span>
                        <p className="job-description">{experience.job_description}</p>
                    </article>
                )
            })
        )
    }
    return (
        <div className="experience">
            <section>
                <h1>RELEVANT EXPERIENCE</h1>
                {experiences.length > 0 && renderExperienceList()}

            </section>
        </div>
    )
}

export default Experience