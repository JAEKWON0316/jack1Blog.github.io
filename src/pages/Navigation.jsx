import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import { MdNavigateNext } from "react-icons/md";
import { RiGithubFill, RiInstagramFill, RiKakaoTalkFill, RiGoogleFill  } from "react-icons/ri";

const Navigation = () => {

    //변수 선언 및 초기화
    const [ actItem, setActItem ] = useState('about');
    const handleClick = (navItem) => {
        setActItem(navItem);
    }

  return (
     //actItem이 about이면 action해주고 아니면 null해준다. onClick 함수 호출할 땐 매개변수 안에 담아줘야한다 onClick ={() => }
    <div className="navi">
        <img src={Logo} className="logo" alt="logo" />
        <h4 className="hello">Hello, FullStack Developer<br /> jack's Page</h4>
        <div className="navbox">
            <a href="#about" className={`nav-tems ${actItem === 'about' ? 'action' : ''}`}
                        onClick={() => handleClick('about')}> 
                <span /><MdNavigateNext /> about me 
            </a>
            <a href="#profile" className={`nav-tems ${actItem === 'profile' ? 'action' : ''}`}
                        onClick={() => handleClick('profile')}>
                <span /><MdNavigateNext /> Profile
            </a>
            <a href="#skills" className={`nav-tems ${actItem === 'skills' ? 'action' : ''}`}
                        onClick={() => handleClick('skills')}>
                <span /><MdNavigateNext /> Skills
            </a>
            <a href="#projects" className={`nav-tems ${actItem === 'projects' ? 'action' : ''}`}
                        onClick={() => handleClick('projects')}>
                <span /><MdNavigateNext /> projects
            </a>
            <a href="#career" className={`nav-tems ${actItem === 'career' ? 'action' : ''}`}
                        onClick={() => handleClick('career')}>  
                <span /><MdNavigateNext /> career
            </a>
        </div>
        <div className="text-center mt-5 mb-4">
            <img src="images/left-background.png" className="img-fluid" />
        </div>
        <div className="text-center snsbox">
            <a href="https://github.com/JAEKWON0316/reactBlog" className="github"><RiGithubFill /></a>
            <a href="https://www.instagram.com/jack1zz_" className="insta"><RiInstagramFill /></a>
            <a href="https://www.kakao.com" className="kakao"><RiKakaoTalkFill /></a>
            <a href="https://mail.google.com" className="google"><RiGoogleFill /></a>
        </div>
    </div>
  )
}

export default Navigation