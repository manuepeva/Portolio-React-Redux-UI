import React from 'react'
import ProjectsCmp from "../Projects/ProjectsCmp"
import Education from "../Education/Education"
import CallToAction from "../Cta/CallToAction"
import Projects from '../ProyectsPage/Projects'
import Header from "../Header/Header"
import Banner from '../Banner/Banner'
import ReduxCom from "../ReduxCom/ReduxCom"
import Footer from '../Footer/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

const Login = () => {
    return (
        <div>
            <div className="landingP">
                <Banner />
            </div>
            <div className="redux-section">
                <ReduxCom />
                <ProjectsCmp />
                <CallToAction />
            </div>
        </div>
    )
}

export default Login
