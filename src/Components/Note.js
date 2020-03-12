import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Note extends Component {

  render(){
  return (
    <div className="Note">
    <p>{this.props.currentFolder.name}</p>
    <p>{this.props.currentNote.name}</p>
    <p>{this.props.currentNote.content}</p>
    <Link to="/"><button>Back</button></Link>
    </div>
  );
  }
}

Note.propTypes = {
  currentFolder: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  
  currentNote: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
}

export default Note;
