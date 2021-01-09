import React from 'react'
import proj1 from '../../img/chatjs.png'
import proj2 from '../../img/expensetrack.png'
const ProjectsCmp = () => {
    return (
        <div className="row projects">
            <div className="column projec1">
                <div>
                    <img src={proj1} alt="Project"></img>
                </div>
                <div>
                    <h3>Chat App ReactJS</h3>
                    <p>Objective: Provide a chat interface where user can choose a username and a room
                        and then loggin and see other chat users.
                    </p>
                </div>
            </div>
            <div className="column projec2">
                <div>
                    <img src={proj2} alt="Project"></img>
                </div>
                <div>
                    <h3>Title: Expense Tracker ReactJS</h3>
                    <p>Objective: Create an interface where user can add and delete
                        as well as see his current balance.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCmp
