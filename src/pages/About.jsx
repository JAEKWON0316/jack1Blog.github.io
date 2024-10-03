import React from 'react';
import 'remixicon/fonts/remixicon.css';

const About = () => {
  
  return (
    <section id="about">
      <div className="basic_box">
        <div className="background-box">
          <span class="intro">"29살에 시작한 신입 개발자"</span>
        <h1 className='mb-5 black_font flex_underline'><i class="ri-links-line"></i><span className="block_underline">About Me</span></h1>
      <h3 className='mb-5'>저는 웹 그리고 모바일 애플리케이션을 만드는중입니다.</h3>
          <p className='about_text1'>
          메인 언어 JAVA로 백엔드 개발에 관심을 가지고 있는 주니어 개발자
          </p>
          <p className='about_text2 mb-5'>
          대학교 진학 후 프로그래밍 언어와 전자공학에 대해 처음 공부를 하였습니다. 
          이 공부들은 그동안 배워왔던 무조건 외워서 하는 공부가 아닌 제가 이해를 하여 결과를 도출할 수 있다는 점이 매력적으로 다가왔고 스스로가 재미있어서 노력을 하게 되었습니다. 
          그렇게 남들보다 뒤처졌다는 걸 안 저는 성장하기 위해 여러 프로젝트를 개발하고 있습니다. 
          이러한 행동들은 제 도전정신에 대한 밑거름이 되었고 그렇게 졸업 후에 컴퓨터와 개발자에 관한 자격증들을 딸 수 있게 도와줬습니다.
          늦게 시작한만큼 더 열심히 도전하며 배우겠습니다.
          </p>
      </div>
   
    <div className="row black_font">
      <div className="col-md-3">
        <div className="card">
        <i class="ri-database-2-fill ft-size text-c"></i>
          <h5 className='about-text '>Server</h5>
        </div>
      </div>
        <div className="col-md-3">
        <div className="card">
        <i class="ri-pages-fill ft-size text-c"></i>
          <h5 className='about-text'>Web</h5>
        </div>
      </div>
        <div className="col-md-3">
        <div className="card">
        <i class="ri-java-line ft-size text-c"></i>
          <h5 className='about-text'>Java</h5>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
        <i class="ri-computer-fill ft-size text-c"></i>
          <h5 className='about-text'>Spring</h5>
        </div>
      </div>
      </div>

      <div className="about_banner mt-5 p-4">
          <div className='banner_text mb-1'>1)&nbsp;&nbsp;맡은 프로젝트를 꼭 끝낼 수 있는 <span className='text-decoration-underline'><strong>책임감 있는</strong></span> 개발자가 되겠습니다.</div>
          <div>2)&nbsp;&nbsp;<span className='text-decoration-underline'><strong>빠르고 효율적인</strong></span> 개발자가 되기 위해 노력하겠습니다. </div>
        </div> 
    </div>
    </section>
  );
}

export default About