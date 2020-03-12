import React from 'react';
import UserContext from './UserContext';
import { Link } from 'react-router-dom';


class AddFolder extends React.Component {   

  static contextType = UserContext;

  render() {   
    const {handleAddFolder} = this.context;
    return(
      <form onSubmit={(e) => handleAddFolder(e)}>
        <label htmlFor="folderInput">Enter folder name:</label>
        <input type="text" name="folderInput" id="folderInput" required/>
        <Link to="/">
        <input type="submit" value="Submit" />
        </Link >
      </form>
    )
  }
}

export default AddFolder;