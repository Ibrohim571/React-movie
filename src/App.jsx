
import {Component} from 'react'
import Footer from './Movie app/Landing/Footer';
import Menu from './Movie app/Landing/Menu';
import Header from './Movie app/Landing/Header';
import "./Movie app/style/Asosiy.css"
class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    )
  }
}
export default App;
