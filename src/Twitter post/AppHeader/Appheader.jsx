import {Component} from 'react'

export default class AppClone extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {indexPost, indexLike} = this.props
    return (
      <div className='app-header d-flex'>
        <h2>Ibrohim Jurayev</h2>
        <h4>posts {indexPost} like {indexLike}</h4>
      </div>
    )
  }
}