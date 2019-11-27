import React, { Component } from 'react'
import { getMovies} from '../services/fakeMovieService'
export default class Movie extends Component {

    state = {
        movies: [getMovies(), liked]
        
    }

    handleDelete = movieId => {
        this.setState({
            movies: this.state.movies.filter(movie => (
                movie['_id'] !== movieId 
                )
            )
        })
    }
    formatCount = () => {
        const count = this.state.movies.length
        return count === 0 ? 
        'There are 0 movies in the database' : 
        `There are ${count} in the database`
    }

    renderTableHeader = () => {
        const count = this.state.movies.length
        if(count === 0) return null

           return (
               <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
               </tr>
           )
        
     }
    renderMoviesTable = () => {
        const count = this.state.movies.length
        if(count === 0) return null
        
        
        return ( 
            
            this.state.movies.map(movie => (
            <tr key={movie['_id']}>
                <td>{movie['title']}</td>
                <td>{movie['genre']['name']}</td>
                <td>{movie['numberInStock']}</td>
                <td>{movie['dailyRentalRate']}</td>
                <td><button onClick={() => this.handleDelete(movie['_id'])}>Delete</button></td>
            </tr>
            ))
        )
    }
    render() {

        return (
            <React.Fragment>
                <div>{this.formatCount()}</div>
                <div>
                    {this.renderTableHeader()}
                    {this.renderMoviesTable()}
                </div>
            </React.Fragment>
        )
    }
}
