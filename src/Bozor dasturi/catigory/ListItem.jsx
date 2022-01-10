import React from 'react';
import {Link} from 'react-router-dom'

function ListItem(props) {
  return (
    <div>
      <Link to={`/note/${props.item.id}`}>
        <p>{props.item.body}</p>
      </Link>
    </div>
  );
}

export default ListItem;