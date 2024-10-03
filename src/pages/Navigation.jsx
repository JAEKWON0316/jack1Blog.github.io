import React, { useState, useEffect } from 'react';
import pf from '../assets/다운로드 (1).jpg';
import { MdNavigateNext } from "react-icons/md";
import { RiGithubFill, RiInstagramFill, RiKakaoTalkFill, RiGoogleFill } from "react-icons/ri";

const Navigation = () => {
    const [actItem, setActItem] = useState('home'); // 기본값을 'home'으로 설정
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
            behavior: 'smooth',
        });
    };

    // 섹션의 활성화를 관리하는 함수
    const handleScroll = () => {
        const sections = ['home', 'about', 'profile', 'skills', 'projects', 'career'];
        let currentSection = actItem; // 현재 활성화된 섹션을 기준으로 설정

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // 뷰포트 안에 있을 경우
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    currentSection = section; // 현재 섹션을 활성화
                }
            }
        });

        if (currentSection !== actItem) {
            setActItem(currentSection); // 활성화 상태 변경
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', handleScroll); // 이벤트 제거
        };
    }, [actItem]); // actItem이 변경될 때마다 효과를 재실행

    return (
        <div className="navi">
            <img 
                src={pf} 
                style={{ width: '150px', height: '150px', borderRadius: '10rem' }}   
                className="logo" 
                alt="logo" 
            />  
            <h4 className="hello mt-4 text-c pe-3">이재권</h4>
            <span className='hello2 mb-4 pe-3'>Java 백엔드 개발자</span>
            <div className="navbox">
                <a href="#home" className={`nav-tems ${actItem === 'home' ? 'action' : ''}`}
                    onClick={() => setActItem('home')}>
                    <span /><MdNavigateNext /> home
                </a>
                <a href="#about" className={`nav-tems ${actItem === 'about' ? 'action' : ''}`}
                    onClick={() => setActItem('about')}>
                    <span /><MdNavigateNext /> about me
                </a>
                <a href="#profile" className={`nav-tems ${actItem === 'profile' ? 'action' : ''}`}
                    onClick={() => setActItem('profile')}>
                    <span /><MdNavigateNext /> Profile
                </a>
                <a href="#skills" className={`nav-tems ${actItem === 'skills' ? 'action' : ''}`}
                    onClick={() => setActItem('skills')}>
                    <span /><MdNavigateNext /> Skills
                </a>
                <a href="#projects" className={`nav-tems ${actItem === 'projects' ? 'action' : ''}`}
                    onClick={() => setActItem('projects')}>
                    <span /><MdNavigateNext /> projects
                </a>
                <a href="#career" className={`nav-tems ${actItem === 'career' ? 'action' : ''}`}
                    onClick={() => setActItem('career')}>
                    <span /><MdNavigateNext /> career
                </a>
            </div>
            <div className="text-center mt-4 mb-4">
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
        zIndex: 1000,
    },
};

export default Navigation;
