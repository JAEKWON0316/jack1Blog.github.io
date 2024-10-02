import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './pages/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const App = () => {
  return (
    <Container>
       <Navigation />
       <Row>
           <Col md={{span:9, offset:3}}>
              <Home />
              <About />
              <Profile />
              <Skills />
              <Projects />
              <Career />
           </Col>
       </Row>
    </Container>  
  )
}
export default App