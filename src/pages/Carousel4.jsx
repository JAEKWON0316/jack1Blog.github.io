import React, { useState } from 'react';
import '../style/carousel.css';
import spboard01 from '../assets/spboard01.png';
import spboard02 from '../assets/spboard02.png';
import spboard03 from '../assets/spboard03.png';
import spboard04 from '../assets/spboard04.png';
import spboard05 from '../assets/spboard05.png';
import spboard06 from '../assets/spboard06.png';
import spboard07 from '../assets/spboard07.png';
import spboard08 from '../assets/spboard08.png';
import spboard09 from '../assets/spboard09.png';

const Carousel4 = ({ onClose }) => {
  // 이미지 배열과 상태 추가
  const images = [
    spboard01,
    spboard02,
    spboard03,
    spboard04,
    spboard05,
    spboard06,
    spboard07,
    spboard08,
    spboard09
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
    <section id="Carousel4" className="carousel-container" onClick={onClose}>
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

export default Carousel4;