import React from 'react';
import notes from '../datta/data';
function Note(props) {
  const noteId = props.match.params.id
  const newNote = notes.find(item => item.id == noteId)
  return (
    <div>
      <p>{newNote?.body}</p>
    </div>
  );
}

export default Note;