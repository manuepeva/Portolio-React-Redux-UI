import React, { useState } from 'react'
import { uuid as uuidv4 } from 'uuid'

const Form = () => {
    const [message, updateMessage] = useState({
        name: '',
        lastName: '',
        date: '',
        comments: ''
    })
    const [error, updateError] = useState(false)
    const handleChange = (e) => {
        updateMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }
    const submitDate = (e) => {
        e.preventDefault()
        if (name.trim() === '' ||
            lastName.trim() === '' ||
            date.trim() === '') {
            updateError(true)
            return
        }
        updateError(false)
        message.id = uuidv4
        updateMessage({
            name: '',
            lastName: '',
            date: '',
            comments: ''
        })
    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    className="input-name"
                    onChange={handleChange}
                    value={name}
                />
                <input
                    type="text"
                    name="lastName"
                    className="input-lastName"
                    onChange={handleChange}
                    value={lastName}
                />
                <input
                    type="date"
                    name="date"
                    className="input-date"
                    onChange={handleChange}
                    value={date}
                />
                <textarea
                    className="txt-area"
                    name="comments"
                    onChange={handleChange}
                    value={comments}
                >
                </textarea>
                <button
                    type="submit"
                    className="btn-form"
                >Send</button>
            </form>
        </div>
    )
}

export default Form
