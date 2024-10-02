import React, { useState, useEffect } from 'react';

const Home = ({ activeNavItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShowingAboutBox2, setIsShowingAboutBox2] = useState(false); // 새로운 상태 추가
  const [isAtTop, setIsAtTop] = useState(true); // 스크롤 위치 상태 추가

  useEffect(() => {
    const handleScroll = (e) => {
      setIsAtTop(window.scrollY === 0); // 맨 위에 있을 때 상태 업데이트
      // 스크롤이 맨 위로 갔을 때 about-box2 숨기기
      if (window.scrollY === 0) {
        e.preventDefault();
        setIsShowingAboutBox2(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록

    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);

  return (
    <section 
      id="home" 
      onMouseEnter={(e) => {
        e.preventDefault(); // 기본 이벤트 방지
        setIsHovered(true);
        setIsShowingAboutBox2(true); // 마우스가 올라가면 about-box2 보이기
      }}
      onMouseLeave={(e) => {
        e.preventDefault(); // 기본 이벤트 방지
        setIsHovered(false);
        // mouseLeave 시에 about-box2가 보이지 않도록 하려면 아래 주석을 해제하세요.
        setIsShowingAboutBox2(true);
      }} 
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* activeNavItem에 따라 보여지는 about-box */}
      <div className={`about-box ${!isAtTop || isShowingAboutBox2 ? 'hidden' : ''}`}>
        <div className="home_box">
          <p className='black_font hbox_m h_name'>-이재권-</p>
          <p className='black_font hbox_m'>Java 백엔드 개발자 포트폴리오</p>
          <p className='hbox_m'>안녕하세요. <br />신입 Java 백엔드 개발자 <br />이재권입니다.</p>
        </div>
      </div>

      {/* about-box2를 표시 */}
      <div className={`about-box2 ${isShowingAboutBox2 && isAtTop ? 'visible' : 'hidden'}`}>
        <div className="home_box2">
          <p className='black_font hbox_m h_name'>그럼 시작하겠습니다.</p>
          <p className='black_font hbox_m'>찾아봐 주셔서 감사합니다!</p>
          <p className='hbox_m'>안녕하세요. <br />신입 Java 백엔드 개발자 <br />이재권입니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
