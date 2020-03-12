import React from 'react';
import UserContext from './UserContext';
import '../App.css';
import PropTypes from 'prop-types';

class AddNote extends React.Component {   



  static contextType = UserContext;

  render() {  
    console.log(this.props); 
    const {handleAddNote} = this.context;
    return(
      <form onSubmit={(e) => handleAddNote(e, this.props.match.params.folderId).then(() => 
      this.props.history.push('/folders/' + this.props.match.params.folderId))}>
        <label htmlFor="noteInput">Enter Note name:</label>
        <input type="text" name="noteInput" id="noteInput" required/>
        <br />
        <label htmlFor="noteContent">Enter Note content:</label>
        <br />
        <textarea name="noteContent"></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

AddNote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      folderId: PropTypes.string
    })
  }),

  history: PropTypes.func
}

export default AddNote;