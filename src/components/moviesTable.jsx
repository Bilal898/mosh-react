import Like from './common/like'

import React, { Component } from 'react'
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody';
export default class MoviesTable extends Component {

    columns = [
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like',
            content: movie => (
                <Like liked={movie.liked} 
                onClick={() => this.props.onLike(movie)}
                />
            )
        },
        { key: 'delete',
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            )
        }
    ]
    render() {
    const { onSort, sortColumn, movies} = this.props
    return (
    <table className="table">
        <TableHeader columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
        />
        <TableBody 
            data={movies}
            columns={this.columns}
        />
        {/* <tbody>
            {movies.map(movie => (
            <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked} 
                    onClick={() => this.onLike(movie)}
                /></td>
                <td><button 
                onClick={() => this.onDelete(movie)}
                className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
            ))}
        </tbody> */}
    </table>

    )
    }
}
