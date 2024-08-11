import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './pages/Navigation';

import About from './pages/About';
import Experience from './pages/Experience';
import History from './pages/History';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

const App = () => {
  return (
    <Container>
       <Navigation />
       <Row>
           <Col md={{span:9, offset:3}}>
              <About />
              <History />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
           </Col>
       </Row>
    </Container>  
  )
}
export default App