import {Component} from 'react';

class Kalkulyator extends Component{
  constructor(props) {
    super(props)
    this.state = {
      number1: 0
    }
  }
  Umumiy = (val) => {
    this.setState({number1: val})
  }
  clearNumber = () => {
    document.querySelector('.num1').value = "";
    document.querySelector('.num2').value = "";
  }
  render() {
    return(
      <div>
        <h4>{this.state.number1}</h4>
        <input type="number" className="num1"/>
        <input type="number" className="num2"/>
        <button onClick = {() => this.Umumiy(this.state.number1 + 1)}>qushish</button>
        <button onClick = {() => this.Umumiy(0)}>cls</button>
        <button onClick = {() => this.Umumiy(this.state.number1 - 1)}>ayirish</button>
      </div>
    )
  }
}

export default Kalkulyator