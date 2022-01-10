
import Header from './Header';
import {Route, Switch } from 'react-router-dom';
import Home from './Home';
import Content from './Content';
import Order from './Order';
import ErrorPage from './ErrorPage';
import Meals from './Meals';
import './styles/asosiy.css'
import IdMeal from './elements/IdMeal';

function RouterClon() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/content" component={Content} />
        <Route path="/order" component={Order} />
        <Route path="/category/:mealsId" component={Meals} />
        <Route path="/meal/:id" component={IdMeal} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default RouterClon;