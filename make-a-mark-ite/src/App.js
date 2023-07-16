import React from 'react'
import './App.css';
import NavgationBar from './components/NavigationBar/NavgationBar';
import BookButtons from './components/BookButtons/BookButtons';
import AboutUs from './components/AboutUs/AboutUs';
import InstaFeed from './components/InstaFeed/InstaFeed';

function App() {
  return (
    <div className="App">
      <NavgationBar />
      <BookButtons />
      <AboutUs />
      <InstaFeed />
    </div>
  );
}

export default App;
