import { Component } from "react"

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like: 'all',
      buttons: [
        {name: "all", label: "Alls"},
        {name: "like", label: "Likes"}
      ]
    }
    this.onLikeForm = this.onLikeForm.bind(this)
  }

  onLikeForm(e) {
    const targetS = e.target.getAttribute('name');
    this.setState({like: targetS})
    this.props.onLikeForm(targetS)
  }

  render() {
    const buttons = this.state.buttons.map(({name, label} )=> {
      return (
        <button key={name} name = {name} onClick={this.onLikeForm}>{label}</button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}