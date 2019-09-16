import React from "react";
import "./TechStack.css"

const TechStack = () => {
    const tech_stack = ["ReactJS", "VueJS", "Firebase", "HTML/CSS", "Git/Github", "BootStrap", "WordPress"]
    const renderStack = () => {
        return (
            tech_stack.map((stack, index) => {
                return (
                    <li key={index}>{stack}</li>
                )
            })
        )
    }
    return (
        <div className="tech_stack">
            <h1>TECH STACK</h1>
            <ul>{renderStack()}</ul>
        </div>
    )
}

export default TechStack