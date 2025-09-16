import React from 'react'
import weatherAPI from '../../../utils/img/weatherAPI.png'
import cryptoAPI from '../../../utils/img/cryptoAPI.png'
import drinksAPI from '../../../utils/img/drinksAPI.png'
import carInsuranceAPI from '../../../utils/img/carInsuraceAPI.png'
import './ProjectsSection.scss'
const ProjectsSection = () => {
    return (
        <div className="container-front-proyects">
            <div className="row projects">
                <div className="column projec1">
                    <div>
                        <a href="https://confident-swartz-a9b1cc.netlify.app/"><img src={weatherAPI} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Weather API</h3>
                        <p>Objective: Provide a chat interface where user can search for a city and country and get its current weather
                    </p> 
                    </div>
                </div>
                <div className="column projec2">
                    <div>
                    <a href="https://gracious-spence-3edb13.netlify.app/"><img src={cryptoAPI} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Crypto currency API</h3>
                        <p>Objective: Provide a user interface where user can search for its favorite crypto currency and get its current value
                    </p>
                    </div>
                </div>
            </div>
            <div className="row projects">
                <div className="column projec1">
                    <div>
                        <a href="https://sleepy-ptolemy-aef1d2.netlify.app/"><img src={drinksAPI} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Searc you drink API</h3>
                        <p>Objective: Provide a user interface where user can search for its favorite drinks
                </p>
                    </div>
                </div>
                <div className="column projec2">
                    <div>
                        <a href="https://pensive-tesla-643283.netlify.app/"><img src={carInsuranceAPI} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Car Insurance API</h3>
                        <p>Objective: Provide an user interface where the user can search for a car insurance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
