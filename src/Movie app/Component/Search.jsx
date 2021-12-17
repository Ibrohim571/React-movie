import {Component} from 'react'
export default class Search extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    search: '',
    type: 'all'
  }

  handleSearch = (e) => {
    if(e.key == 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  hendleFilter = (e) => {
    this.setState( () => ({type: e.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }

  render() {
    return (
    <div className="row">
      <label className="active" for="first_name2">Search</label>
      <input 
        value={this.state.search} 
        id="first_name2" type="search" 
        className="validate searchInput" 
        onChange = {(e) => this.setState({search: e.target.value})}
        onKeyUp = {this.handleSearch}
      />
      <div className='searchFather'>
        <p className='searchParag'>
          <label>
            <input 
              class="with-gap" 
              name="filter"
              type="radio" 
              data-type = "all"
              onChange={this.hendleFilter}
              checked = {this.state.type == 'all'}
            />
            <span>All</span>
          </label>
        </p>
        <p className='searchParag'>
          <label>
            <input 
              class="with-gap"
              name="filter"
              type="radio"
              data-type = "movie"
              onChange={this.hendleFilter}
              checked = {this.state.type == 'movie'}
            />
            <span>Movie</span>
          </label>
        </p>
        <p className='searchParag'>
          <label>
            <input 
              class="with-gap"
              name="filter" 
              type="radio" 
              data-type = "series"
              onChange={this.hendleFilter}
              checked = {this.state.type == 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    </div>
    )
  }
}