import React from 'react';
import Header from './catigory/Header';
import Notes from './pages/Notes';
import { Route, Switch } from 'react-router-dom';
import Note from './pages/Note';

function BozorClon(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Notes} />
        <Route path="/note/:id" component={Note} />
      </Switch>
    </div>
  );
}

export default BozorClon;