import React from 'react';
import 'remixicon/fonts/remixicon.css';

const About = () => {
  
  return (
    <section id="about">
      <div className="about-box">
        <div className="background-box">
        <h1 className='mb-5'>About Me</h1>
      <h2 className='mb-5'>I'm developing mobile and web applications.</h2>
          <p>
            안녕하세요. 저는 이제 막 웹, 모바일 app을 개발하기 시작한 새내기 개발자 이재권입니다.
          </p>
          <p className='mb-5'>
          저는 원래 요리사로써 사람들의 입에 즐거움을 입력했었습니다. 
          그러던 도중 평소 궁금해하던 프로그래밍을 입문하게 됐고, 코드를 따라쳐보며 많은 재미를 느꼈습니다. 
          매일 퇴근하고 개발 공부를 하던 중 더 늦기전에 사람들이 사용할 수 있는 서비스를 개발해서 제가 평소 컴퓨터를 사용하며 느꼈던 편안함과 즐거움을 느낄 수 있게 해주고 싶었습니다. 
          이후 요리사 일을 정리하고 매일매일 개발 공부에 모든 시간을 투자하고 있습니다. 늦은만큼 남들보다 더 열심히 개발을 배우고있습니다.
          </p>
      </div>
   
    <div className="row">
      <div className="col-md-3">
        <div className="card">
        <i class="ri-database-2-fill ft-size text-c"></i>
          <h5 className='about-text'>Server</h5>
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
          <div className='mb-1'>1)&nbsp;&nbsp;늦게 시작한 만큼 더 열심히 배우고있습니다.</div>
          <div>2)&nbsp;&nbsp;<span className='text-decoration-underline'><strong>빠르고 효율적인</strong></span> 개발자가 되기 위해 노력하겠습니다. </div>
        </div> 
    </div>
    </section>
  );
}

export default About