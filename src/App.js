import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const App = () => {
  const [clickButton, setClickButton] = useState(false); // 네비게이션 버튼 클릭 상태
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치 관리

  const btnClick = () => {
    setClickButton((prevState) => !prevState); // 버튼 클릭 시 상태를 반전
  };

  const handleLinkClick = () => {
    setClickButton(false); // 네비게이션 닫기
  };

  const handleScrollPosition = (position) => {
    setScrollPosition(position); // 스크롤 위치 저장
  };

  useEffect(() => {
    // 스크롤 위치 복원
    window.scrollTo(scrollPosition, 0);
  }, [scrollPosition]); // scrollPosition이 변경될 때마다 복원

  return (
    <Container>
      <Navigation
        btnClick={btnClick}
        clickButton={clickButton}
        handleLinkClick={handleLinkClick}
        handleScrollPosition={handleScrollPosition} // 스크롤 위치 저장
      />
      <Row className={`app-row ${clickButton ? 'shifted' : ''}`}>
        <Col md={{ span: 9, offset: 3 } } className={`col-md-9 ${clickButton ? 'shifted' : ''}`} >
          <Home />
          <About />
          <Profile />
          <Skills />
          <Projects />
          <Career />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
