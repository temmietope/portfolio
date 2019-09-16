import React, { useState, useEffect } from "react"
import { organizationsList } from "./organizationsList"
import "./Organizations.css"

const Organizations = () => {
    const [organizations, setOrganizations] = useState([])
    useEffect(() => {
        setOrganizations(organizationsList)
    }, [organizations])
    const renderOrganizations = () => {
        return (
            organizations.map((organization) => {
                return (
                    <span key={organization.id}>
                        <a href={organization.website} target="_blank" rel="noopener noreferrer"><img src={organization.img_src} alt={organization.alt} /></a>
                        <p>{organization.name}</p>
                    </span>
                )
            })

        )
    }
    return (
        <div className="organizations">
            <h1>MEMBER OF</h1>
            <div className="organizations_list">
            {organizations.length > 0 && renderOrganizations()}
            </div>
        </div>
    )
}

export default Organizations