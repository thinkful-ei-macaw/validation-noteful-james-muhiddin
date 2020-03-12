import React, { Component } from 'react';
import FolderSidebar from './FolderSidebar';
import NotesList from './NotesList';
import '../App.css';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import PropTypes from 'prop-types';

class Main extends Component {
 
 render() {
  return (
    <div className="Main">
      <Link to="/">
      <header>
        <h1>Noteful</h1>
      </header>
      </Link>
      <ErrorBoundary>
        <div className="Container">
          <FolderSidebar 
          foldersList={this.props.foldersList}
          history={this.props.history}
          selectedFolderId = {this.props.selectedFolderId}/>
          <NotesList folderId={this.props.selectedFolderId} notesList={this.props.notesList}/>
        </div>
      </ErrorBoundary>
    </div>
  );
  }
}

Main.propTypes = {
  folderList: PropTypes.array,
  history: PropTypes.func,
  selectedFolderId: PropTypes.string
}


export default Main;
  