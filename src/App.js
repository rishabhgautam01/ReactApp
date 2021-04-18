import React from 'react';
import './App.css';
import Menubars from './Menubars.js';
import './Menubars.css';

import Sidenav from './Sidenav.js';
import './Sidenav.css'
import SearchBar from './SearchBar.js';
import Table from './List.js';
import AboutMe from './me.js'
function App() {

  const [aboutMe, setAboutMe] = React.useState(false);
  return (
    <div>
      
    <div >
      <Sidenav/>
    <Menubars  ></Menubars>
    </div>
    <SearchBar/>
        < div id= "meet"  >My Meetings</div>

        
      <Table/>  
      <AboutMe/>
      </div>
    
  );
}

export default App;
