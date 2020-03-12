import React, { Component } from 'react';

class Note extends Component {
  render(){
    
  return (
    <div className="Note">
    <p>{this.props.currentFolder.name}</p>
    <p>{this.props.currentNote.name}</p>
    <p>{this.props.currentNote.content}</p>
    <button>Back</button>
    </div>
  );
  }
}

export default Note;
