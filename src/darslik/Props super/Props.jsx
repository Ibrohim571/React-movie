import {Component} from 'react'
import PropsList from './PropsList'
function Props(props) {
  return (
    <div>
      {props.users.map((user) => (
        <PropsList cds = {user} Pclick = {props.Bosing}/>
      ))}
    </div>
  );
}

export default Props