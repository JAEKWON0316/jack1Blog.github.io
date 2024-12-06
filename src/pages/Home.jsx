import React, { useState, useEffect } from 'react';

const Home = ({ activeNavItem }) => {
  const [isShowingAboutBox2, setIsShowingAboutBox2] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      setIsAtTop(window.scrollY === 0);
      if (window.scrollY === 0) {
        e.preventDefault();
        setIsShowingAboutBox2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // about_me 섹션으로 스크롤하는 함수
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 5초마다 상태 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShowingAboutBox2((prev) => !prev); // 2초마다 상태를 토글
    }, 5000);

    // 컴포넌트가 언마운트 될 때 타이머 정리
    return () => clearInterval(interval);
  }, []); // 빈 배열로 한번만 실행되도록

  return (
    <section 
      id="home"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className={`about-box ${!isAtTop || isShowingAboutBox2 ? 'hidden' : ''}`}>
        <div className="home_box">
          <p className='black_font hbox_m h_name'>-이재권-</p>
          <p className='black_font hbox_m'>Java 풀스택 개발자 포트폴리오</p>
          <p className='hbox_m sand_font'>안녕하세요. <br />신입 Java 풀스택 개발자 <br />이재권입니다.</p>
        </div>
      </div>

      <div className={`about-box2 ${isShowingAboutBox2 && isAtTop ? 'visible' : 'hidden'}`}>
        <div className="home_box2">
          <p className='black_font hbox_m h_name'>그럼 시작하겠습니다.</p>
          <p className='black_font hbox_m'>찾아봐 주셔서 감사합니다!</p>
          <p className='hbox_m sand_font mb-5'>안녕하세요. <br />신입 Java 풀스택 개발자 <br />이재권입니다.</p>
          <button className='home_btn' onClick={scrollToAboutMe}>
            더 알아보기 <i className="ri-arrow-down-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
