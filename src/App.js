import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './pages/Navigation';

import About from './pages/About';
import Experience from './pages/Experience';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const App = () => {
  return (
    <Container>
       <Navigation />
       <Row>
           <Col md={{span:9, offset:3}}>
              <About />
              <Profile />
              <Skills />
              <Experience />
              <Projects />
           </Col>
       </Row>
    </Container>  
  )
}
export default App