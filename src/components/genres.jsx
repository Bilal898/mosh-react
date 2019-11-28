import React from 'react'

export const Genres = (props) => {
    const allSelected = { _id: '-1', name: 'All Genres'}
    return (
        <ul className="list-group" style={{ cursor: 'pointer'}}>
        <button type="button" 
        className="list-group-item list-group-item-action"
        onClick={() => props.onClick(allSelected)}
        >All Genres</button>
        {props.allGenres.map(genre => (
            // <li className="list-group-item" key={genre._id}>
            // {genre.name}
            // </li>

            <button type="button" key={genre._id}
            className="list-group-item list-group-item-action"
            onClick={() => props.onClick(genre)}
            >{genre.name}</button>
        ))}
        </ul>
    )
}
