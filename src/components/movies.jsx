import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
import GenresList from './genresList';
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash';


class Movies extends Component {
  state = {
    movies: [],
    itemsPerPage: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: false,
    sortColumn: { path: 'title', order: 'asc' }
   }

  componentDidMount() {
    const genres = [{ name: 'All Gneres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  render() {
    const { movies: allMovies, itemsPerPage, currentPage, genres, selectedGenre, sortColumn } = this.state;
    const filteredMovies = selectedGenre ? this.filterMovies(allMovies, selectedGenre) : allMovies;
    const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sortedMovies, currentPage, itemsPerPage);

    return (
      <div className='row'>
        <div className="col-2">
          < GenresList genres={genres}
                       onItemSelect={this.handleSelect}
                       selectedGenre={selectedGenre}/>
        </div>
        <div className="col-10">
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onSort={this.handleSort} />
          <Pagination
            itemsCount={filteredMovies.length}
            itemsPerPage={itemsPerPage}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange} />
        </div>
      </div>
    );
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  // handleDelete = id => {
  //   let movies = this.state.movies.filter(movie => movie._id !== id);
  //   this.setState({ movies });
  // }

  handleSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  filterMovies = () => {
    const { selectedGenre } = this.state;
    return selectedGenre && selectedGenre._id ? getMovies().filter(movie => movie.genre._id === selectedGenre._id) : getMovies();
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  }

  setSortColumn = path => {
    const sortColumn = { ...this.state.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = this.state.sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.order = 'asc';
      sortColumn.path = path;
    }
    this.setState({ sortColumn });
  };

  handleSort = (path) => {
    switch (path) {
      case 'Title':
        this.setSortColumn('title')
        break;
        case 'Genre':
        this.setSortColumn('genre.name')
        break;
        case 'Stock':
          this.setSortColumn('numberInStock')
          break;
          case 'Rate':
        this.setSortColumn('dailyRentalRate')
        break;
      default:
        break;
    }
  }
}


export default Movies;
