import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import * as routes from "./components/constants/routes"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import PetProjects from "./components/PetProjects"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="wrapper">
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.about} component={About} />
        <Route path={routes.resume} component={Resume} />
        <Route path={routes.contact} component={Contact} />
        <Route path={routes.experience} component={Experience} />
        <Route path={routes.pet_projects} component={PetProjects} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
