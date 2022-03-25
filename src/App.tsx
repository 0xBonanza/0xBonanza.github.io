import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from "@material-ui/core"
import {Main} from "./components/Main"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"



function App() {
  return (
    <div className="App">
    <Container maxWidth="md">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </Container>
    </div>
  );
}

export default App;
