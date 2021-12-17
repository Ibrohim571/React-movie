
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  ClickPlus = () => {
    // this.setState({count: this.state.count + 1})
    this.setState((prev) => ({count: prev.count + 1}))
    this.setState((prev) => ({count: prev.count + 1}))
  }

  render() {
    return(
      <div>
        <div><h1>{this.state.count}</h1></div>
        <button onClick={this.ClickPlus}>click</button>
      </div>
    )
  }
}
export default App;