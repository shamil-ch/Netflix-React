import React from "react";
import NavBar from "./components/NavBar/NavBar";
import {originals, action, comedy, horror, Romance, Documentries} from './urls'
import './App.css';
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost  url={originals} title="Netflix Originals"/>
      <Rowpost  url={action} title="Action Movies" isSmall/>
      <Rowpost url={comedy} title="Comedy Movies" isSmall/>
      <Rowpost url={horror} title="Horror Movies" isSmall/>
      <Rowpost url={Romance} title="Romance Movies" isSmall/>
      <Rowpost url={Documentries} title="Documentries" isSmall/>

    </div>
  );
}

export default App;
