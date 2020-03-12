import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import {Link} from 'react-router-dom';
import UserContext from './UserContext';

class NotesList extends Component {

  static contextType = UserContext;
 
 render() {
  const {handleDelete} = this.context;

   let notesList = this.props.notesList.map(note => {
     return (    
    <li className='noteItem' key={note.id}>
            <Link to={"/note/" + note.id}><h2>{note.name}</h2></Link>
          Date modified:   {moment(note.modified).format('LL')}
          <button className="delete" onClick={() => handleDelete(note.id)}>Delete</button>
        </li>
    )
  })
    let buttonLink = (<div></div>);
    if (this.props.folderId) {
      buttonLink = (
      <Link to={`/folder/${this.props.folderId}/add-note`}>
      <button className="AddNote"> + Add Note</button>
      </Link>)
    }

  return (
    <div className="NotesList">
     {buttonLink}
      <ul>
        {notesList}
      </ul>
    </div>
  );  
  }
}
export default NotesList;
  