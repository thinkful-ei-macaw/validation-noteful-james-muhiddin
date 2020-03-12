import React from 'react';

const UserContext = React.createContext({
  notes: [],
  folders: [],
  handleDeleteNote: () => {},
  handleDeleteFolder: () => {},
  handleAddFolder: () => {},
  handleAddNote: () => {},
});



export default UserContext;