import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Projects from '../ProyectsPage/Projects'
import Education from '../Education/Education'
import Location from '../Location/Location'
import Contact from '../Contact/Contact'
import React from 'react'

const Navigation = () => {
    return (
            <Router>
        <div className="container">
               
        <nav className="nav">
            <ul className="header-links hide-desktop" id="nav">
              <li className="exit-btn">x</li>
              <li>
                <Link className="link-h" to="/Projects">Projects</Link>
              </li>
              <li>
                <Link className="link-h" to="/Education">Education</Link>
              </li>
              <li>
                <Link className="link-h" to="/Location">Location</Link>
              </li>
              <li>
                <Link className="link-h" to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
          <Switch>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Education">
              <Education />
            </Route>
            <Route path="/Location">
              <Location />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
      </Router>
    )
}

export default Navigation
