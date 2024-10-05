import React, { useState, useEffect } from 'react';
import '../style/index.css';

const Readme = ( {onClose }) => { // id prop 추가
  

  return (
    <section id="Readme" className='readme_container' onClick={onClose}>
      <div className='readme_box' onClick={(e) => e.stopPropagation()}>
         <div className="readme_box2">
         <div className="readme_banner">
            README.md  <button className="btn_close" onClick={onClose}></button>
         </div>
         <div className="readme_box3">
            <p className='read_title'>링키지&nbsp;(Spring, MySQL)</p>
            <h6 className='read_intro mb-4'>2024.04 - 2024.06(팀 프로젝트)</h6>
            <h2 className='read_url'><i class="ri-attachment-2 url_clip"></i>Deployment URL</h2>
            <p className='mb-5'><a className="read_url2" href="http://ezroad.kr/">http://ezroad.kr</a></p>
            <h2 className='read_url'><i class="ri-pushpin-fill read_pin"></i>Summary</h2>
            <p><strong>Spring과 MySQL을 연동하여 개발한 식당 예약 웹사이트</strong></p>
            <ul className='read_ul'>
                <li>캐치테이블을 보고 영감을 받고 직접 개발</li>
                <li>백엔드와 프론트엔드를 명확히 구분하여 개발</li>
                <li>Mysql 공용DB와 Figma 그리고 Java Spring을 활용하여 구현</li>
                <li>예약이 가능한 어플 상 파일·이미지 관리가 중요한 부분을 중점으로 개발 및 GPS를 활용한 가시성 확보</li>
            </ul>
            <div className="career_box2 basic_font mb-2 mt-2">
            &nbsp;&nbsp;&nbsp; 제가 맡은 주요기능: 메뉴/식당 DB관리 , 파일·이미지 입·출력·삭제 관리
            </div>    
            <p className='read_my mb-5'>
                식당과 메뉴 정보의 등록부터 삭제까지 모든 CURD 기능을 담당하였습니다.  
                파일업로드를 위하여 Pom.xml에 commons io, commons fileupload를 설정한 후 MultipartFile의 uploadFile로 파일정보들을
                나누어 DB에 저장하였습니다. 그리고 servletContext로 경로를 설정해주고 transferTo로 파일 업로드 및 파일이 폴더내로 저장되게 하였습니다.
                또한 썸네일제작을 위해 imageUrl 이라는 필드를 만들어 각 이미지의 src경로 정보를 담아 다른 사용자에게 보여질 수 있도록 만들며 
                imnum(ImageNumber)값으로 가게id와 메뉴id를 따라가 저장될 수 있도록 설계하였습니다.
                마지막으로 jackson-databind, AJAX, FormData를 활용하여 실시간 비동기 처리 기능을 개발하였습니다. 
            </p>
            <h2 className='read_url'><i class="ri-lightbulb-flash-line"></i>&nbsp;&nbsp;Background</h2>
            <p>요즘처럼 모든 것이 빠르게 변화하고 즉각적인 결과를 요구하는 즉시성의 시대에서 캐치테이블과 같은 어플을 만들고 싶었습니다. 
               대부분의 사람들이 여자친구 남자친구로 인하여 식당 예약을 한 경험과 맛집을 찾아가서 오랜시간 줄 서 본 경험이 있을거라 생각이되었습니다.
               그리하여 맛집이나 내 주변 식당을 찾고 싶을 떄 어떻게하면 편리하고 빠르게 찾을 수 있을까 라는 생각과 요즘 같은 시대에 어울리는 어플을 
               한 번 만들어보자 라는 생각에 개발을 시작하게 되었습니다. 
            </p>
            <h2 className='read_url mt-5'><i class="ri-search-eye-line"></i>&nbsp;&nbsp;Meaning</h2>
            <p>
                처음으로 제대로 된 Github 협업을 통해 개발한 프로젝트입니다. 시작할 땐 AWS의 RDS로 데이터베이스를 관리하려고 하였지만 
                요금이 비정상적이게 많이 나와 MySQL 공유DB를 선택해서 DB설계 및 관리를 시작하였습니다.
                프론트엔드에서 Figma로 와이어프레임과 전체적인 틀을 보내주면 그걸 토대로 VSCODE에 작성해서 기본적인 페이지 구성하였고 
                카카오API로 GPS를 설정했지만 광범위하게 쓰려면 생각보다 돈이 많이 들어 중간에 Google API로 변경하여 GPS를 제작하게 되었습니다.
                이러한 점들로 인해 RDS에 관하여 공부하게되었고 API를 활용한 지도제작을 익히게 되었습니다.  
            </p>
            <p>
                또한, 고객들에게 어떠한 방식으로 보다 빠르고 편리한 서비스를 제공할 수 있을까 생각을 하다가 각 주제별 테마를 넣어서 원하는 정보를
                쉽게 가져가 예약 하실 수 있도록 하자 해서 테마별 식당 GPS를 제공하게 되었습니다. 예를들어 "비오는 날 생각나는 식당", "바다여행 필수 맛집" 처럼 
                사용자들은 자기가 정한 테마를 블로그처럼 홍보할 수 있고 다른 사용자들은 테마가 마음에 들면 팔로우를 해서 자기가 원하는 정보를 쉽게 가져갈 수 있도록 만들었습니다.  
            </p>
            <p>
                그밖에도 노출여부와 키워드를 활용한 가게홍보 , 날짜를 선택해서 예약할 수 있는 기능, 댓글/좋아요,  이미지/파일 업로드 등의 기능을 구현하며 
                일반적인 커뮤니티 서비스에서 핵심적인 기능들이 어떻게 구현되는지 경험해볼 수 있었던 프로젝트입니다.
            </p>
            <h2 className='read_url mt-5'><i class="ri-tools-fill"></i>&nbsp;&nbsp;Technology Stack(s)</h2>
            <p className='read_skills'>
             Java, Spring FrameWork, MySQL, Figma, Vanilla JS, Tomcat, Maven
            </p>
            <h2 className='read_url mt-5'><i class="ri-settings-3-line"></i>&nbsp;&nbsp; Setup & Usage</h2>
            <div className='setup_box'>
            $ git clone https://github.com/ahnhyogeon/TeamProject <br></br>
            $ cd TeamProject
            </div>
         </div>
      </div>
      </div>
    </section>
  );
};

export default Readme;
