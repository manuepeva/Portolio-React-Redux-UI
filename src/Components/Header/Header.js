import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Projects from '../Projects/Projects'
import Education from '../Education/Education'
import Location from '../Location/Location'
import Contact from '../Contact/Contact'
import styles from './stylesHeader.scss'
import logo from '../../img/mpv.png'
import ham from '../../img/ham.png'

const Header = () => {
   
    function mobileView(){
        let menu = document.getElementsByClassName('hide-desktop')
    }

    
    return (
            <Router>
        <div className="container">
                <div className="logo">
                <Link to="/">
                <p>Manuel Pérez</p>
                <img src={logo} alt="Logo MPV" />
                </Link>
                </div>
        <nav className="nav">
            <Link to="#" className="">
                <img src={ham} alt="Toggle Menu" className="menu" onClick={mobileView} id="menu"></img>
            </Link>
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
        </div>
      </Router>
        )
}

export default Header
