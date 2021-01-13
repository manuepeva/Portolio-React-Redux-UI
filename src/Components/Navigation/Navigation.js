import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Projects from '../ProyectsPage/Projects'
import Education from '../Education/Education'
import Ubication from '../Location/Ubication'
import Contact from '../Contact/Contact'
import React from 'react'

const Navigation = () => {
    return (
        <div className="container">
               
        <nav className="nav">
            <ul className="header-links hide-desktop" id="nav">
              <li className="exit-btn">x</li>
              <li>
                <Link className="link-h" to="/projects">Projects</Link>
              </li>
              <li>
                <Link className="link-h" to="/education">Education</Link>
              </li>
              <li>
                <Link className="link-h" to="/location">Location</Link>
              </li>
              <li>
                <Link className="link-h" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Navigation
