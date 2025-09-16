import React from 'react'
import proj1 from '../../../utils/img/chatjs.png'
import proj2 from '../../../utils/img/expensetrack.png'
import proj3 from '../../../utils/img/bbad.png'
import proj4 from '../../../utils/img/mern-tasks.png'
import './ProjectsSection.scss'
const ProjectsSection = () => {
    return (
        <div className="container-front-proyects">
            <div className="row projects">
                <div className="column projec1">
                    <div>
                        <a href="https://angry-khorana-8b4a9d.netlify.app/"><img src={proj1} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Chat App ReactJS</h3>
                        <p>Objective: Provide a chat interface where user can choose a username and a room
                        and then loggin and see other chat users. MERN Project.
                    </p> 
                    </div>
                </div>
                <div className="column projec2">
                    <div>
                    <a href="https://nostalgic-saha-d76d63.netlify.app/"><img src={proj2} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Title: Expense Tracker ReactJS</h3>
                        <p>Objective: Create an interface where user can add and delete
                        as well as see his current balance. MERN Project.
                    </p>
                    </div>
                </div>
            </div>
            <div className="row projects">
                <div className="column projec1">
                    <div>
                        <a href="https://manuepeva.github.io/API---Breaking-Bad-Series-/"><img src={proj3} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Title: Breaking Bad API</h3>
                        <p>Objective: Provide a user interface where user can search for a character from the
                        Tv series.
                </p>
                    </div>
                </div>
                <div className="column projec2">
                    <div>
                        <a href="https://vibrant-swartz-1dfb19.netlify.app/"><img src={proj4} alt="Project"></img></a>
                    </div>
                    <div className="projects-text">
                        <h3>Title: Tasks Manager</h3>
                        <p>Objective: Create an interface where user can add, delete, edit and
                        update his projects and tasks. MERN Project.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
