import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'react-bootstrap'
import FirstPage from './components/firstpage'
import SecondPage from './components/secondpage'
import ThirdPage from './components/thirdpage'


function App() {
  return (
    <Container fluid='true' className='main-app'>
      <FirstPage />
      <SecondPage />
      <ThirdPage />

    </Container>
  );
}

export default App;
