import React from "react";
import {Route} from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
// import styled from "styled-components";
// import Popup from './components/Popup';



export default function App() {
 
  return (
    
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
    
  );
}
