import React, { Component } from 'react';
import UserContext from './UserContext';
import '../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FolderSidebar extends Component {
  static contextType = UserContext;



  render() {
    const {foldersList, handleDeleteFolder} = this.context;
    
  let folders = foldersList.map(folder => {
    return (
      <div className={this.props.selectedFolderId === folder.id ?
          "folderSelected folderItem" : "folderItem"} onClick={() =>
            {this.props.history.push('/folders/'+ folder.id)}}
            key={folder.id}> {folder.name}
        <button className="DeleteFolder" onClick={(e) => handleDeleteFolder(e, folder.id)}> - Delete Folder</button>
      </div>
    )
  })
  
  return (
    <div className="FolderSidebar">
      {folders} 
      <Link to="/add-folder">
        <button className="AddFolder" > + Add Folder</button>
      </Link>
    </div>
  );
  }
}

FolderSidebar.propTypes ={
  selectedFolderId: PropTypes.string,
  history: PropTypes.string,
}
export default FolderSidebar;
