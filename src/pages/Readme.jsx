import React, { useState, useEffect } from 'react';
import '../style/index.css';

const Readme = ( {onClose }) => { // id prop 추가
  

  return (
    <section id="Readme" className='readme_container' onClick={onClose}>
      <div className='readme_box' onClick={(e) => e.stopPropagation()}>
         <div className="readme_box2">
         <div className="readme_banner">
            README.md  <button className="btn_close" onClick={onClose}></button>
         </div>
         <div className="readme_box3">
            <p className='read_title'>링키지&nbsp;(Spring, MySQL)</p>
            <h6 className='read_intro mb-4'>2024.04 - 2024.06(팀 프로젝트)</h6>
            <h2 className='read_url'><i class="ri-attachment-2 url_clip"></i>Deployment URL</h2>
            <p className='mb-5'><a className="read_url2" href="https://ezenroad.com">https://ezenroad.com</a></p>
            <h2 className='read_url'><i class="ri-pushpin-line read_pin"></i>Summary</h2>
         </div>
      </div>
      </div>
    </section>
  );
};

export default Readme;
