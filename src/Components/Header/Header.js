import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navigation from '../Navigation/Navigation'
import React, {useState} from 'react'
import logo from '../../img/mpv.png'
import ham from '../../img/ham.png'


const Header = () => {
  const [toggle, setToggle] = useState(true)


    return (
        <div className="container">
                <div className="logo">
               <Switch>
               </Switch>
                <Link href="#" >
                <p>Manuel Pérez</p>
                <img src={logo} alt="Logo MPV" />
                </Link>
                 <Route path="/">
                 </Route>
                </div>
                <Link to="#" className="">
                <img src={ham} alt="Toggle Menu" className="menu" id="menu"></img>
                </Link>
                <Navigation />
          </div>
        )
}

export default Header
