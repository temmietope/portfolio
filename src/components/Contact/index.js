import React from "react"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h1>CONTACT ME</h1>
            <section>
                <span><a href="mailto:temmieayodele@gmail.com"
                ><i className="fab fa-google"></i
                ></a></span>
                <span><a
                    href="https://www.linkedin.com/in/temitope-ayodele-948a6315b/"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a></span>
                <span><a href="https://github.com/temmietope">
                    <i className="fab fa-github"></i>
                </a></span>
                <span><a href="https://twitter.com/temmmie_"><i className="fab fa-twitter"></i
                ></a></span>
                <span><a href="https://www.instagram.com/temmie_tope/"
                ><i className="fab fa-instagram"></i
                ></a></span>
                <span><a href="tel:+2348182685817"><i className="fas fa-phone"></i> </a></span>
            </section>
        </div>
    )
}

export default Contact