import {Component} from 'react'

class ComponentUse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isCouting: false
    }
  }

  showFu

  handleStart = () => {
    this.setState({isCouting: true})
    this.counterId = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 500);
  }
  handleStop = () => {
    this.setState({isCouting: false})
    clearInterval(this.counterId)
  }
  handleReset = () => {
    this.setState({isCouting: false, count: 0})
    clearInterval(this.counterId)
  }
  componentDidMount() {
      this.setState({count: +localStorage.getItem('count')})
  }
  componentDidUpdate() {
    localStorage.setItem('count', this.state.count.toString())
  }
  componentWillUnmount() {
    clearInterval(this.counterId)
  }
  render() {
    return(
      <div>
        <h6>{this.state.count}</h6>
        {(this.state.isCouting)?
        <button onClick = {this.handleStop}>Stop</button>
        :<button onClick = {this.handleStart}>Start</button>
    }
    <button onClick = {this.handleReset}>Restart</button>
      </div>
    )
  }
}

export default ComponentUse