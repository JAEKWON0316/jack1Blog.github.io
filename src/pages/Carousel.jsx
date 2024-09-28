import React, { useState } from 'react';
import '../style/carousel.css';

const Carousel = ({ onClose }) => {
  // 이미지 배열과 상태 추가
  const images = [
    "https://github.com/user-attachments/assets/8a173180-9a4d-44d7-99fa-35b4788e1cd3",
    "https://github.com/user-attachments/assets/3dca297d-ed46-461c-a04c-b35cdfa4ffa9",
    "https://github.com/user-attachments/assets/c11fe3dd-f4ec-4bd4-9b22-2054698ec95b",
    "https://github.com/user-attachments/assets/72b63471-b444-419b-b694-d66542234f34",
    "https://github.com/user-attachments/assets/c4776e72-42ed-4453-87f1-ef2e148d4725",
    "https://github.com/user-attachments/assets/4f0cd31a-c80b-45e0-971c-f15e09492003",
    "https://github.com/user-attachments/assets/2ab8d676-3a6e-4f04-836c-d98a6e4584ea",
    "https://github.com/user-attachments/assets/e829067d-4303-4269-90fb-74d3385a713d",
    "https://github.com/user-attachments/assets/46f1178b-951d-45a3-ae64-59b14d144ad1",
    "https://github.com/user-attachments/assets/e41bfe90-0932-4a2b-bf77-c3ff46361c5d",
    "https://github.com/user-attachments/assets/f16dd666-5f7b-469c-a512-1c1546072afe"

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
          <div className='carousel_move'>{currentIndex + 1} / {images.length}</div> {/* 현재 이미지 인덱스 표시 */}
          <button onClick={handleNext}><i className="ri-arrow-drop-right-line"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;