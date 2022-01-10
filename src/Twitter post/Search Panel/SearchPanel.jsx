
import {Component} from 'react'

export default class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tram: ''
    }
    this.onSearchForm = this.onSearchForm.bind(this)
  }

  onSearchForm(e) {
    const tram = e.target.value
    this.setState({tram})
    this.props.onSearchForm(tram)
  }

  render() {
    return (
      <input 
        type="search"
        onChange={this.onSearchForm}
        className="form-control search-input"
        placeholder="search by posts"
      />
    )
  }
}
