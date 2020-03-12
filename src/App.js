import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import moment from 'moment';
import './App.css';
import Main from './Components/Main';
import Note from './Components/Note';
import UserContext from './Components/UserContext'
import AddFolder from './Components/AddFolder';
import AddNote from './Components/AddNote';

class App extends Component {

state = {
  notes: [],
  folders: []
}

handleDelete = (noteId) => {
  fetch(`http://localhost:9090/notes/${noteId}`,
   { method: 'DELETE',
    headers: { 'content-type': 'application/json' },
   })
  .then(res => res.json())
  .then(() => {
    this.setState({notes: this.state.notes.filter(note => note.id !== noteId)})
  })
}

handleAddFolder = (e) => { 
  e.preventDefault();

  let folder = e.target.folderInput.value;

  return fetch(`http://localhost:9090/folders`,
  { method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({name: folder})
  })
  .then(res => res.json())
  .then(folder => {
    this.setState({folders: [...this.state.folders, folder]})
  })
}

handleAddNote = (e, folderId) => { 
  e.preventDefault();

  let name = e.target.noteInput.value;
  let content = e.target.noteContent.value;
  let modified = moment(new Date());
  console.log(this.state.notes);
  return fetch(`http://localhost:9090/notes`,
  { method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({name, content, modified, folderId})
  })
  .then(res => res.json())
  .then(note => {
    this.setState({notes: [...this.state.notes, {name, modified, folderId, content}]})
    console.log(this.state.notes);
  })

}

componentDidMount() {
  fetch('http://localhost:9090/folders')
  .then(res => res.json())
  .then(folders => {
    fetch('http://localhost:9090/notes')
    .then(res => res.json())
    .then(notes => {
      this.setState({notes: notes, folders: folders})
      
    })
  })
}

render() {

  return (
    <UserContext.Provider value={{
      notesList: this.state.notes,
      foldersList: this.state.folders,
      handleDelete: this.handleDelete,
      handleAddFolder: this.handleAddFolder,
      handleAddNote: this.handleAddNote
    }}>
    <div className="App">
      <Route exact path="/"   
      render={(props) => (
        <Main 
          notesList = {this.state.notes}
          history={props.history}
        />
      )}
    />
    <Route exact path="/folder/:folderId"   
      render={(props) => (
        <Main 
          foldersList = {this.state.folders}
          notesList = {this.state.notes.filter(note => note.folderId === props.match.params.folderId)}
          history={props.history}
          selectedFolderId = {props.match.params.folderId}
        />
      )}
    />
    <Route exact path="/note/:noteId"   
      render={(props) => {
        let note = this.state.notes.find((note) => note.id === props.match.params.noteId);
        let folder = this.state.folders.find(folder => folder.id === note.folderId);
        return (
        <Note 
          currentFolder = {folder}
          currentNote = {note}
          history={props.history}
        />
      )}}
    />
    <Route exact path='/add-folder' component={AddFolder} />
    <Route exact path='/folder/:folderId/add-note' component={AddNote} />
    </div>
    </UserContext.Provider>
  );
  } 
}

export default App;
