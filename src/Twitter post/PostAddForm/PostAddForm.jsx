import {Component} from 'react'

export default class PostAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChangeText(e) {
    this.setState({text: e.target.value})
  }
  submitForm(e) {
    e.preventDefault()
    this.setState({text: ''})
  }

  render() {
    let {addForm} = this.props;
    let {text} = this.state
    return (
      <form className="bottom-panel d-flex" onSubmit={this.submitForm}>
        <input
          type="text"
          placeholder="Gapir"
          className="form-control new-post-label"
          onChange={this.onChangeText}
          value = {this.state.text}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick = {() => (text) ? addForm(text) : ''}>
          AddPost
        </button>
      </form>
    )
  }
}