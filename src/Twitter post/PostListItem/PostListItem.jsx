import {Component} from 'react'
import './PostListItem.css'

export default class PostListItem extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props
    let className = "app-list-item-label";
    if(important) {
      className += ' important'
    }
    if(like) {
      className += ' lll'
    }
    return (
      <li className = "app-list-item d-flex justify-content-between">
        <span className={className} onClick={onToggleLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-book"></i>
        </div>
      </li>
    )
  }
}