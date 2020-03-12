import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import {Link} from 'react-router-dom';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

class NotesList extends Component {

  static contextType = UserContext;
 
 render() {
  const {handleDelete} = this.context;

   let notesList = this.props.notesList.map(note => {
     return (    
    <li className='noteItem' key={note.id}>
            <Link to={"/notes/" + note.id}><h2>{note.name}</h2></Link>
          Date modified:   {moment(note.modified).format('LL')}
          <button className="delete" onClick={() => handleDelete(note.id)}>Delete</button>
        </li>
    )
  })
    let buttonLink = (<div></div>);
    if (this.props.folderId) {
      buttonLink = (
      <Link to={`/folders/${this.props.folderId}/add-note`}>
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

NotesList.propTypes = {
  noteList: PropTypes.array,
  folderId: PropTypes.string
}
export default NotesList;
  