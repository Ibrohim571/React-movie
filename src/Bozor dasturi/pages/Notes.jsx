import React from 'react';
import ListItem from '../catigory/ListItem';
import notes from '../datta/data';
function Notes(props) {
  return (
    <div>
      {notes.map((item, index) => (
        <ListItem key={index} item = {item} />
      ))}
    </div>
  );
}

export default Notes;