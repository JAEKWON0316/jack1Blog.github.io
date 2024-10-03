import React, { useState } from 'react'
import Carousel from '../pages/Carousel'; // Carousel 컴포넌트 import
import Carousel2 from '../pages/Carousel2';
import Carousel3 from '../pages/Carousel3';
import Carousel4 from '../pages/Carousel4';
import Carousel5 from '../pages/Carousel5';
import Carousel6 from '../pages/Carousel6';
import shop05 from '../assets/shop05.png';
import mysecurity01 from '../assets/spsecurity01.png';
import spboard01 from '../assets/spboard01.png';
import firebase01 from '../assets/firebase08.png';


const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false); // Carousel 표시 상태 관리
  const [showCarousel2, setShowCarousel2] = useState(false);
  const [showCarousel3, setShowCarousel3] = useState(false);
  const [showCarousel4, setShowCarousel4] = useState(false);
  const [showCarousel5, setShowCarousel5] = useState(false);
  const [showCarousel6, setShowCarousel6] = useState(false);

  const handleGitHubClick = () => {
    // GitHub 홈페이지로 이동하는 함수
    window.open('https://github.com/ahnhyogeon/TeamProject', '_blank'); // '_blank'는 새 탭에서 열리도록 함
  };
  const handleGitHubClick2 = () => {
    // GitHub 홈페이지로 이동하는 함수
    window.open('https://github.com/JAEKWON0316/myshop01', '_blank'); // '_blank'는 새 탭에서 열리도록 함
  };
  const handleGitHubClick3 = () => {
    // GitHub 홈페이지로 이동하는 함수
    window.open('https://github.com/JAEKWON0316/spSecurity', '_blank'); // '_blank'는 새 탭에서 열리도록 함
  };
  const handleGitHubClick4 = () => {
    // GitHub 홈페이지로 이동하는 함수
    window.open('https://github.com/JAEKWON0316/spBoard', '_blank'); // '_blank'는 새 탭에서 열리도록 함
  };
  const handleGitHubClick5 = () => {
    // GitHub 홈페이지로 이동하는 함수
    window.open('https://github.com/JAEKWON0316/reactFirebase', '_blank'); // '_blank'는 새 탭에서 열리도록 함
  };
  const handleGitHubClick6 = () => {
    // GitHub 홈페이지로 이동하는 함수
    window.open('https://github.com/JAEKWON0316/myshop01', '_blank'); // '_blank'는 새 탭에서 열리도록 함
  };

  const handleImageClick = () => {
    setShowCarousel(true); // 이미지 버튼을 클릭하면 Carousel을 표시
  };
  
  const closeCarousel = () => {
    setShowCarousel(false); // Carousel 숨기기
  };

  const handleImageClick2 = () => {
    setShowCarousel2(true); // 이미지 버튼을 클릭하면 Carousel2 표시
  };
  
  const closeCarousel2 = () => {
    setShowCarousel2(false); // Carousel2 숨기기
  };

  const handleImageClick3 = () => {
    setShowCarousel3(true); // 이미지 버튼을 클릭하면 Carousel2 표시
  };
  
  const closeCarousel3 = () => {
    setShowCarousel3(false); // Carousel2 숨기기
  };
  
  const handleImageClick4 = () => {
    setShowCarousel4(true); // 이미지 버튼을 클릭하면 Carousel2 표시
  };
  
  const closeCarousel4 = () => {
    setShowCarousel4(false); // Carousel2 숨기기
  };

  const handleImageClick5 = () => {
    setShowCarousel5(true); // 이미지 버튼을 클릭하면 Carousel2 표시
  };
  
  const closeCarousel5 = () => {
    setShowCarousel5(false); // Carousel2 숨기기
  };

  const handleImageClick6 = () => {
    setShowCarousel6(true); // 이미지 버튼을 클릭하면 Carousel2 표시
  };
  
  const closeCarousel6 = () => {
    setShowCarousel6(false); // Carousel2 숨기기
  };

  return (
    <section id="projects">
      <div className="basic_box">
      <span class="intro">"제가 만든 작품들"</span>
      <h1 className='mb-5 black_font flex_underline'><i class="ri-links-line"></i><span className="block_underline">Projects</span></h1>
        <div className="row black_font mt-5">
          <div className="col-md-6">
            <div className="project_card">
              <img 
                src="https://github.com/user-attachments/assets/8a173180-9a4d-44d7-99fa-35b4788e1cd3" 
                width="420" 
                height="400" 
                style={{ width: '420px', height: '400px', borderRadius: '1rem'}} 
                alt="Project"
              />
              <div className="text_box basic_font">
                <h4 className='title1 black_font'>Linkisy</h4>
                <div className="time1">
                  2024.04 - 2024.06(팀 프로젝트)
                </div>
                <h5 className='project_intro mb-2'>
                  Java Spring Framework 기반으로 오픈API를 이용해 GPS로 여러기능을 하는 웹사이트
                </h5>
                <div>
                  <ul className='project_intro2'>
                    <li>식당예약을 위해 고민을 바탕으로 개발(Link+Easy의 linkisy)</li>
                    <li>백엔드와 프론트엔드를 명확히 구분하여 개발</li>
                    <li>Mysql 공용DB와 Figma 그리고 Java Spring을 활용하여 구현</li>
                    <li>예약이 가능한 어플 상 파일 및 이미지 관리가 중요하여 이 부분을 잘 만듦, GPS를 활용한 가시성 확보</li>
                  </ul>
                </div>
                <div className='project_link'>
                <i class="ri-link-m link_color"></i><a href="https://www.ezenroad.com" target="_blank">https://www.ezenroad.com</a>
                </div>
                <div className='project_language'>
                  Java, Spring FrameWork, MySQL, Figma, Vanilla JS 
                </div>
                <div className="project_btn mt-2">
                  <button type='button' className="p_btn_1" onClick={handleGitHubClick}><i class="ri-github-fill"></i>GitHub 저장소</button>
                  <button className="p_btn_1" onClick={handleImageClick}><i class="ri-file-image-line"></i>이미지</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="project_card">
              <img 
                src={shop05}
                width="420" 
                height="400" 
                style={{ width: '420px', height: '400px', borderRadius: '1rem'}} 
                alt="Project"
              />
              <div className="text_box basic_font">
                <h4 className='title1 black_font'>쇼핑몰 제작</h4>
                <div className="time1">
                  2024.02(개인 프로젝트)
                </div>
                <h5 className='project_intro mb-2'>
                  VSCODE로 기본적인 HTML CSS JS를 활용하여 여러가지 기능을 추가해 만든 쇼핑몰 웹사이트
                </h5>
                <div>
                  <ul className='project_intro2'>
                    <li>배열과 JSON타입을 이용해 이미지 및 파일 관리</li>
                    <li>localStroage를 이용한 장바구니 기능 개발</li>
                    <li>AJAX를 이용한 비동기 통신</li>
                    <li>JQuery를 이용한 수식 계산 및 비용 산정</li>
                  </ul>
                </div>
                <div className='project_link'>
                <i class="ri-link-m link_color"></i><a href="https://github.com/JAEKWON0316/myshop01"  target="_blank">https://github.com/JAEKWON0316/myshop01</a>
                </div>
                <div className='project_language'>
                  HTML, CSS, JavaScript, JQuery, Bootstrap
                </div>
                <div className="project_btn mt-2">
                  <button type='button' className="p_btn_1" onClick={handleGitHubClick2}><i class="ri-github-fill"></i>GitHub 저장소</button>
                  <button className="p_btn_1" onClick={handleImageClick2}><i class="ri-file-image-line"></i>이미지</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
          <div className="project_card">
              <img 
                src={mysecurity01}
                style={{ width: '420px', height: '400px', borderRadius: '1rem'}} 
                alt="Project"
              />
              <div className="text_box basic_font">
                <h4 className='title1 black_font'>블로그 제작</h4>
                <div className="time1">
                  2024.04 (개인 프로젝트)
                </div>
                <h5 className='project_intro mb-2'>
                  Spring Security와 MySQL로 로그인 및 인증 멤버 관리를 중점으로 만든 블로그
                </h5>
                <div>
                  <ul className='project_intro2'>
                    <li>Spring Securiry로 인증 절차기반 로그인 구현</li>
                    <li>멤버 정보로 백엔드 기능, 블로그 UI로 프론트엔드 구성</li>
                    <li>Iframe을 이용한 Youtube 동영상 재생 기능</li>
                    <li>Hash함수를 이용한 비밀번호로 정보보안 강화</li>
                  </ul>
                </div>
                <div className='project_link'>
                <i class="ri-link-m link_color"></i><a href="https://github.com/JAEKWON0316/spSecurity"  target="_blank">https://github.com/JAEKWON0316/spSecurity</a>
                </div>
                <div className='project_language'>
                  Spring, MySQL, HTML, CSS, JavaScript 
                </div>
                <div className="project_btn mt-2">
                  <button type='button' className="p_btn_1" onClick={handleGitHubClick3}><i class="ri-github-fill"></i>GitHub 저장소</button>
                  <button className="p_btn_1" onClick={handleImageClick3}><i class="ri-file-image-line"></i>이미지</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
           <div className="project_card">
              <img 
                src={spboard01}
                width="420" 
                height="400" 
                style={{ width: '420px', height: '400px', borderRadius: '1rem'}} 
                alt="Project"
              />
              <div className="text_box basic_font">
                <h4 className='title1 black_font'>게시판 제작</h4>
                <div className="time1">
                  2024.04 - 2024.05(개인 프로젝트)
                </div>
                <h5 className='project_intro mb-2'>
                  Java Spring Framework 기반으로 MySQL을 연동한 게시판 작업
                </h5>
                <div>
                  <ul className='project_intro2'>
                    <li>Mybatis, tiles를 이용한 Spring MVC 구현</li>
                    <li>MySQL로 DB설계·관리 및 CRUD작업으로 기능구현</li>
                    <li>Maven Repository에서 commons-io와 fileupload로 파일 및 이미지 입·출력 구현</li>
                    <li>비밀번호DB를 활용한 수정, Cookie를 활용한 조회수증가 등 여러가지 기능 개발</li>
                  </ul>
                </div>
                <div className='project_link'>
                <i class="ri-link-m link_color"></i><a href="https://github.com/JAEKWON0316/spBoard"  target="_blank">https://github.com/JAEKWON0316/spBoard</a>
                </div>
                <div className='project_language'>
                  Java, Spring FrameWork, MySQL, Tomcat, Maven
                </div>
                <div className="project_btn mt-2">
                  <button type='button' className="p_btn_1" onClick={handleGitHubClick4}><i class="ri-github-fill"></i>GitHub 저장소</button>
                  <button type='button' className="p_btn_1" onClick={handleImageClick4}><i class="ri-file-image-line"></i>이미지</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
          <div className="project_card">
              <img 
                src={firebase01}
                width="420" 
                height="400" 
                style={{ width: '420px', height: '400px', borderRadius: '1rem'}} 
                alt="Project"
              />
              <div className="text_box basic_font">
                <h4 className='title1 black_font'>채팅방 개설</h4>
                <div className="time1">
                  2024.06(개인 프로젝트)
                </div>
                <h5 className='project_intro mb-2'>
                  Java Spring Framework 기반으로 오픈API를 이용해 GPS로 여러기능을 하는 웹사이트
                </h5>
                <div>
                  <ul className='project_intro2'>
                    <li>React Router를 이용한 페이지 및 컴포넌트 관리</li>
                    <li>Fireabse의 Firestore를 사용하여 전반적인 채팅방 데이터의 입·출력 관리</li>
                    <li>Firebase Authentication을 이용한 사용자 정보 인증 및 로그인 관리</li>
                    <li>프론트엔드 React와 백엔드 Firebase의 효율적인 융합</li>
                  </ul>
                </div>
                <div className='project_link'>
                <i class="ri-link-m link_color"></i><a href="https://github.com/JAEKWON0316/reactFirebase"  target="_blank">https://github.com/JAEKWON0316/reactFirebase</a>
                </div>
                <div className='project_language'>
                  FireBase, React, JavaScript, CSS 
                </div>
                <div className="project_btn mt-2">
                  <button type='button' className="p_btn_1" onClick={handleGitHubClick5}><i class="ri-github-fill"></i>GitHub 저장소</button>
                  <button className="p_btn_1" onClick={handleImageClick5}><i class="ri-file-image-line"></i>이미지</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
          <div className="project_card">
              <img 
                src={shop05}
                width="420" 
                height="400" 
                style={{ width: '420px', height: '400px', borderRadius: '1rem'}} 
                alt="Project"
              />
              <div className="text_box basic_font">
                <h4 className='title1 black_font'>포트폴리오 제작</h4>
                <div className="time1">
                  2024.04 - 2024.06(팀 프로젝트)
                </div>
                <h5 className='project_intro mb-2'>
                  Java Spring Framework 기반으로 오픈API를 이용해 GPS로 여러기능을 하는 웹사이트
                </h5>
                <div>
                  <ul className='project_intro2'>
                    <li>식당예약을 위해 고민을 바탕으로 개발(Link+Easy의 linkisy)</li>
                    <li>백엔드와 프론트엔드를 명확히 구분하여 개발</li>
                    <li>Mysql 공용DB와 Figma 그리고 Java Spring을 활용하여 구현</li>
                    <li>예약이 가능한 어플 상 파일 및 이미지 관리가 중요하여 이 부분을 잘 만듦, GPS를 활용한 가시성 확보</li>
                  </ul>
                </div>
                <div className='project_link'>
                <i class="ri-link-m link_color"></i><a href="https://www.ezenroad.com"  target="_blank">https://www.ezenroad.com</a>
                </div>
                <div className='project_language'>
                  Java, Spring FrameWork, MySQL, Figma, Vanilla JS 
                </div>
                <div className="project_btn mt-2">
                  <button type='button' className="p_btn_1" onClick={handleGitHubClick6}><i class="ri-github-fill"></i>GitHub 저장소</button>
                  <button className="p_btn_1" onClick={handleImageClick6}><i class="ri-file-image-line"></i>이미지</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
          <div className="project_card">
          <div className='project_more'>...더보기</div>
              <div className="text_box2 basic_font">
                <h3 className='project_more2'><span className='red_star'>*</span>프로젝트는 계속 개발될 예정입니다.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="project_banner mt-5 text-c">
        <h5 className='project_text'>*더 많은 프로젝트들을 개발하기 위해 노력하겠습니다.</h5>
      </div>
      </div>  
      {showCarousel && <Carousel onClose={closeCarousel} />}
      {showCarousel2 && <Carousel2 onClose={closeCarousel2} />}
      {showCarousel3 && <Carousel3 onClose={closeCarousel3} />}
      {showCarousel4 && <Carousel4 onClose={closeCarousel4} />}
      {showCarousel5 && <Carousel5 onClose={closeCarousel5} />}
      {showCarousel6 && <Carousel6 onClose={closeCarousel6} />}
    </section>
  );
}

export default Projects