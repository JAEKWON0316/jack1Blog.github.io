import React, { useState } from 'react';
import '../style/carousel.css';
import firebase08 from '../assets/firebase08.png';
import firebase01 from '../assets/firebasechat01.png';
import firebase02 from '../assets/firebasechat02.png';
import firebase03 from '../assets/firebasechat03.png';
import firebase04 from '../assets/firebase04.png';
import firebase05 from '../assets/firebase05.png';
import firebase06 from '../assets/firebase06.png';
import firebase07 from '../assets/firebase07.png';

const Carousel5 = ({ onClose }) => {
  // 이미지 배열과 상태 추가
  const images = [
    firebase08,
    firebase01,
    firebase02,
    firebase03,
    firebase04,
    firebase05,
    firebase06,
    firebase07
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 이미지 인덱스 상태

  const handleNext = () => {
    // 다음 이미지로 이동
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    // 이전 이미지로 이동
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="Carousel5" className="carousel-container" onClick={onClose}>
      <div className='carousel_box' onClick={(e) => e.stopPropagation()}>
        <div className="carousel_img_box">
          <img
            src={images[currentIndex]} // 현재 인덱스의 이미지를 보여줌
            style={{ width: '100%', height: '100%', borderRadius: '1rem' }}
            alt="Project"
          />
        </div>
        <div className='carousel_img_move'>
          <button onClick={handlePrev}><i className="ri-arrow-drop-left-line"></i></button>
          <div className='carousel_move'>{currentIndex + 1} / {images.length}</div> {/* 현재 이미지 인덱스 표시 */}
          <button onClick={handleNext}><i className="ri-arrow-drop-right-line"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Carousel5;