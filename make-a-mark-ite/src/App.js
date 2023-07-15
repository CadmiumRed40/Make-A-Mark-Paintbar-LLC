import React from 'react'
import './App.css';
import NavgationBar from './components/NavigationBar/NavgationBar';
import BookButtons from './components/BookButtons/BookButtons';

function App() {
  return (
    <div className="App">
      <NavgationBar />
      <BookButtons />
    </div>
  );
}

export default App;
