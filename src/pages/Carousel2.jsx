import React, { useState } from 'react';
import '../style/carousel.css';
import shop01 from '../assets/shop01.png';
import shop02 from '../assets/shop02.png';
import shop03 from '../assets/shop03.png'; 
import shop04 from '../assets/shop04.png';
import shop05 from '../assets/shop05.png';

const Carousel2 = ({ onClose }) => {
  // 이미지 배열과 상태 추가
  const images = [
    shop05,
    shop01,
    shop02,
    shop03,
    shop04  
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
    <section id="Carousel2" className="carousel-container" onClick={onClose}>
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

export default Carousel2;