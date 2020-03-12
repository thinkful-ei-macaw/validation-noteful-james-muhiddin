import React from 'react';
import UserContext from './UserContext';
import '../App.css';
import PropTypes from 'prop-types';


class AddFolder extends React.Component {   

  static contextType = UserContext;

  render() {   
    const {handleAddFolder} = this.context;
    return(
      <form onSubmit={(e) => handleAddFolder(e).then(() => this.props.history.push('/'))}>
        <label htmlFor="folderInput">Enter folder name:</label>
        <input type="text" name="folderInput" id="folderInput" required/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

AddFolder.propTypes = {
  history: PropTypes.func
}

export default AddFolder;