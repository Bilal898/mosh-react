import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { Pagination } from './common/pagination';
import { paginate } from '../utils/paginate'
import {ListGroup} from './common/listGroup'
import MoviesTable  from './moviesTable';
import _ from 'lodash'
export default class Movies extends Component {

    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        selectedGenre: '',
        sortColumn: { path: 'title', order: 'asc'}
    }

    componentDidMount(){
        const genres = [{ _id:"", name: 'All Genres'}, ... getGenres()]
        this.setState({
            movies: getMovies(),
            genres: genres
        })
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
        console.log('page', page);
        this.setState({
            currentPage: page,
        })    
    }

    handleGenreSelect = genre => {
        // console.log(genre);
        this.setState({ 
            selectedGenre: genre,
            currentPage: 1
        })
    }

    handleSort = sortColumn => {
        // console.log(path);
        this.setState({
            sortColumn
        })
    }

    getPageData = () =>{
        const { sortColumn, pageSize, currentPage, selectedGenre, movies: allMovies } = this.state

        const filtered = selectedGenre && selectedGenre._id ? 
            allMovies.filter(m => m.genre._id === selectedGenre._id ) :
            allMovies

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: movies}
    }
    render() {
        const  count  = this.state.movies.length
        const { sortColumn, pageSize, currentPage } = this.state
        if(count === 0) 
            return <p>There are no movies in the database</p>
        
        const { totalCount, data: movies } = this.getPageData()
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup items={this.state.genres}
                    onItemSelect={this.handleGenreSelect}
                    selectedItem={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <p>Showing {totalCount} movies in the database</p>
                    <MoviesTable 
                    movies={movies}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                    sortColumn={sortColumn}
                    />
                    <Pagination 
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                        />
                </div>
            </div>
            
        )
    }
}
