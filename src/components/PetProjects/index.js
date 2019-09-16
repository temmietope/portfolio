import React, {useState, useEffect} from "react"
import {projectList} from "./projectList"
import "./PetProjects.css"

const PetProjects = () => {
    const [petProjects, setPetProjects] = useState([])
    useEffect(()=>{
        setPetProjects(projectList)
    }, [petProjects])
    const renderProjects = ()=>{
        return(
            petProjects.map((project)=>{
                return(
                    <article key={project.id}>
                        <h3><a href={project.site_link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                        <p>{project.description}</p>
                        <p className="tech-stack">Tech Stack: {project.tech_stack}</p>
                        <a href={project.repo_link} target="_blank" rel="noopener noreferrer"><button>View Repo</button></a>
                    </article>
                )
            })
        )
    } 
    return (
        <div className="pet_projects">
        <h1>MY PROJECTS</h1>
            <section>
                {petProjects.length > 0 && renderProjects()}
            </section>
        </div>
    )
}

export default PetProjects