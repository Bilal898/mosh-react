import React from 'react'

export const MovieForm = ({ match,history }) => {
    return (
        <div>
            
            <h1>movie form {match.params.id}</h1>
            <button className="btn btn-primary"
                onClick={() => history.push('/movies')}
            >
            Save</button>
        </div>
    )
}
