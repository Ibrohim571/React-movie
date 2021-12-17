import {Component} from 'react'
import Movies from '../Component/Movies'
import Search from '../Component/Search'
import Loader from './Loader'

export default class Header extends Component {

  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=5aa5bf8e&s=panda')
    .then(res => res.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovies = (str, type) => {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=5aa5bf8e&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(res => res.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    return(
      <div className = "menuChas headerWrapper">
        <Search searchMovies = {this.searchMovies}/>
        {this.state.loading? <Loader /> : <Movies movies = {this.state.movies} />}
      </div>
    )
  }
}