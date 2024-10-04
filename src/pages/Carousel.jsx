import React, { useState, useEffect } from 'react';
import '../style/carousel.css';
import carouselData from '../db/carousel.json'; // carousel.json import

const Carousel = ({ id, onClose }) => { // id prop 추가
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselData.carousels.find(car => car.id === id); // 전달받은 id로 카루셀 선택
    if (carousel) {
      setImages(carousel.images); // 카루셀 이미지 설정
      setCurrentIndex(0); // 카루셀 이미지가 바뀔 때 인덱스 초기화
    }
  }, [id]); // id가 변경될 때마다 useEffect 실행

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // 현재 이미지가 없는 경우에 대한 처리
  if (images.length === 0) {
    return <div>No images available.</div>;
  }

  return (
    <section id="Carousel" className="carousel-container" onClick={onClose}>
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
          <div className='carousel_move'>{currentIndex + 1} / {images.length}</div>
          <button onClick={handleNext}><i className="ri-arrow-drop-right-line"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
