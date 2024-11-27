import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { RiGithubFill, RiInstagramFill, RiKakaoTalkFill, RiGoogleFill } from "react-icons/ri";
import pr from '../assets/pr_img3.jpg';
import { IoMenu } from "react-icons/io5";

const Navigation = ({ btnClick, clickButton, handleLinkClick }) => {
    const [actItem, setActItem] = useState('home'); // 기본값을 'home'으로 설정
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sectionPosition, setSectionPosition] = useState(0); // 섹션 위치 저장

    const handleClick = (navItem) => {
        setActItem(navItem);
    };

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

    // 네비게이션을 닫을 때 scrollPosition과 sectionPosition을 기록하고, 이를 통해 스크롤 위치를 유지
    const handleLinkClickAndClose = (navItem, event) => {
        // 브라우저 기본 동작 막기
        if (event) {
            event.preventDefault();
        }

        setScrollPosition(window.pageYOffset);  // 현재 스크롤 위치 저장
        setSectionPosition(window.pageXOffset); // 현재 x축 스크롤 위치 저장
        setActItem(navItem);  // 활성화된 섹션 설정
        handleLinkClick();  // 네비게이션 닫기

        if (navItem === 'home') {
            // home 클릭 시 스크롤을 맨 위로 이동
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // home이 아닌 경우 섹션으로 스크롤 이동
            const element = document.getElementById(navItem);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    // 섹션 위치를 되돌리는 함수
    const resetSectionPosition = () => {
        window.scrollTo(sectionPosition, 0); // 이전 x축 위치로 되돌리기
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
        <div>
            <button type='button' onClick={btnClick}><IoMenu className='headerbtn' /></button>
            <div className={`navi ${clickButton ? "visible" : "hidden"}`}>
                <img
                    src={pr}
                    style={{ width: '150px', height: '150px', borderRadius: '10rem' }}
                    className="logo"
                    alt="logo"
                />
                <h4 className="hello mt-4 text-c pe-3">이재권</h4>
                <span className='hello2 mb-4 pe-3'>Java 풀스택 개발자</span>
                <div className="navbox">
                    <a href="#home"
                        className={`nav-tems ${actItem === 'home' ? 'action' : ''}`}
                        onClick={(event) => { handleLinkClickAndClose('home', event); }}>
                        <span /><MdNavigateNext /> home
                    </a>
                    <a href="#about"
                        className={`nav-tems ${actItem === 'about' ? 'action' : ''}`}
                        onClick={(event) => { handleLinkClickAndClose('about', event); }}>
                        <span /><MdNavigateNext /> about me
                    </a>
                    <a href="#profile"
                        className={`nav-tems ${actItem === 'profile' ? 'action' : ''}`}
                        onClick={(event) => { handleLinkClickAndClose('profile', event); }}>
                        <span /><MdNavigateNext /> Profile
                    </a>
                    <a href="#skills"
                        className={`nav-tems ${actItem === 'skills' ? 'action' : ''}`}
                        onClick={(event) => { handleLinkClickAndClose('skills', event); }}>
                        <span /><MdNavigateNext /> Skills
                    </a>
                    <a href="#projects"
                        className={`nav-tems ${actItem === 'projects' ? 'action' : ''}`}
                        onClick={(event) => { handleLinkClickAndClose('projects', event); }}>
                        <span /><MdNavigateNext /> projects
                    </a>
                    <a href="#career"
                        className={`nav-tems ${actItem === 'career' ? 'action' : ''}`}
                        onClick={(event) => { handleLinkClickAndClose('career', event); }}>
                        <span /><MdNavigateNext /> career
                    </a>
                </div>
                <div className="text-center mt-4 mb-4">
                    <img src="images/left-background.png" className="img-fluid" alt="background" />
                </div>
                <div className="text-center snsbox">
                    <a href="https://github.com/JAEKWON0316" className="github" target='_blank' rel="noopener noreferrer"><RiGithubFill /></a>
                    <a href="https://www.instagram.com/jack1zz_" className="insta" target='_blank' rel="noopener noreferrer"><RiInstagramFill /></a>
                    <a href="https://www.kakao.com" className="kakao" target='_blank' rel="noopener noreferrer"><RiKakaoTalkFill /></a>
                    <a href="https://mail.google.com" className="google" target='_blank' rel="noopener noreferrer"><RiGoogleFill /></a>
                </div>
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
