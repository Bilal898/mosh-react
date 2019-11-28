import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Like from './common/like'
import { Pagination } from './common/pagination';
import { paginate } from '../utils/paginate'
import { Genres } from './genres';
export default class Movies extends Component {

    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: getGenres(),
        selectedGenre: -1
    }

    handleDelete = (movie) => {
        this.setState({
            movies: this.state.movies.filter(m => (
                m._id !== movie._id
            ))
        })
    }

    handleLike = (movie) => {
        console.log('liked', movie);
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked
        this.setState({ movies })
    }
    handlePageChange = page => {
        // console.log('page', page);
        this.setState({
            currentPage: page
        })    
    }

    handleGenreChange = (genre) => {
        // console.log('genre', genre);
        const allMovies = this.state.movies
        let filterMovies = allMovies.filter(m => m.genre === genre.name)
        this.setState({
            selectedGenre: genre._id,
            movies: filterMovies
            
        })
        console.log(this.state);

        
    }
    render() {
        const  count  = this.state.movies.length
        const { pageSize, currentPage, movies: allMovies, genres: allGenres } = this.state
        if(count === 0) 
            return <p>There are no movies in the database</p>
        
        const movies = paginate(allMovies, currentPage, pageSize)
        return (
            <React.Fragment>
            <div className="row">
                <div className="col-sm">
                        
                    <Genres 
                    onClick={this.handleGenreChange}
                    allGenres={allGenres}/>
                </div>
                <div className="col-sm">
                    <p>Showing {count} movies in the database</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} 
                                    onClick={() => this.handleLike(movie)}
                                /></td>
                                <td><button 
                                onClick={() => this.handleDelete(movie)}
                                className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination 
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                        />
                </div>
            </div>
            </React.Fragment>
        )
    }
}
