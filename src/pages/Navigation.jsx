import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import pf from '../assets/다운로드 (1).jpg';
import { MdNavigateNext } from "react-icons/md";
import { RiGithubFill, RiInstagramFill, RiKakaoTalkFill, RiGoogleFill } from "react-icons/ri";

const Navigation = () => {
    const [actItem, setActItem] = useState('about');
    const handleClick = (navItem) => {
        setActItem(navItem);
    };

    const [isVisible, setIsVisible] = useState(false);

    // 스크롤 이벤트 핸들러
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 스크롤 애니메이션
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="navi">
            <img 
                src={pf} 
                style={{ width: '150px', height: '150px', borderRadius: '10rem' }}   
                className="logo" 
                alt="logo" 
            />  
            <h4 className="hello mt-4 text-c">Hello, FullStack Developer<br /> jack's Page</h4>
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

            {/* 스크롤 맨 위로 이동 버튼 */}
            {isVisible && (
                <button className='scroll_btn' onClick={scrollToTop} style={styles.button}>
                    ↑ 
                </button>
            )}
        </div>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        padding: '10px 15px',
        fontSize: '18px',
        borderRadius: '5px',
        backgroundColor: '#333',
        opacity: '0.9',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000, // 버튼이 다른 요소들 위에 표시되도록
    },
};

export default Navigation;