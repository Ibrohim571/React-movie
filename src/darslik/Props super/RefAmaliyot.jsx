import React, {Component} from 'react'

export default class RefAmaliyot extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
      parol: '',
      tel: ''
    }
    this.nameRef = React.createRef();
    this.parolRef = React.createRef();
    this.telRef = React.createRef();
  }

  refFunc = (e) => {
    this.setState({[e.target.name]: e.target.value});
    if(e.target.name == "text" && e.target.value.length > 5) {
      this.parolRef.current.focus();
    }
    if(e.target.name == "parol" && e.target.value.length > 6) {
      this.telRef.current.focus();
    }
  }

  componentDidMount() {
    this.nameRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" name = "text" onChange = {this.refFunc} placeholder = "name" ref = {this.nameRef}/>
        <input type="password" name = "parol" onChange = {this.refFunc} placeholder = "password" ref = {this.parolRef}/>
        <input type="tel" name = "tel" onChange = {this.refFunc} placeholder = "tel" ref = {this.telRef}/>
      </div>
    )
  }
}