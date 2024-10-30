import React, { useState, useEffect } from 'react';
import '../style/index.css';
import readmeData from '../db/readme.json'; // JSON 파일을 import

const Readme = ({ onClose, readmeId }) => {
  const [readmeContent, setReadmeContent] = useState(null);

  useEffect(() => {
    // readmeId가 index로 전달되므로 배열의 순서에 맞춰 데이터 선택
    const selectedReadme = readmeData.readmes.find((readme) => readme.id === readmeId);
    setReadmeContent(selectedReadme);
  }, [readmeId]);

  if (!readmeContent) {
    return <div>Loading...</div>;
  }

  return (
    <section id="Readme" className='readme_container' onClick={onClose}>
      <div className='readme_box' onClick={(e) => e.stopPropagation()}>
        <div className="readme_box2">
          <div className="readme_banner">
            README.md  
            <button className="btn_close" onClick={onClose}></button>
          </div>
          <div className="readme_box3">
            <p className='read_title'>{readmeContent.title}</p>
            <h6 className='read_intro mb-4'>{readmeContent.intro}</h6>
            <h2 className='read_url'><i className="ri-attachment-2 url_clip"></i>Deployment URL</h2>
            <p className='mb-5'>
              <a className="read_url2" href={readmeContent.deploymentURL}target="_blank" rel="noopener noreferrer">
                {readmeContent.deploymentURL}
              </a>
              { readmeId <= 1 && (
              <span style={{'color' : 'red', 'fontSize' : '14px'}}>&nbsp;(현재 더 나은 배포환경을 위해 수정중에 있습니다.)</span>
              )}
            </p>
            <h2 className='read_url'><i className="ri-pushpin-fill read_pin"></i>Summary</h2>
            <p><strong>{readmeContent.summary}</strong></p>
            <ul className='read_ul'>
              {readmeContent.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <div className="career_box2 basic_font mb-2 mt-2">
              &nbsp;&nbsp;&nbsp; 제가 맡은 주요기능: {readmeContent.myRole}
            </div>
            <p className='read_my mb-5'>{readmeContent.description}</p>
            <h2 className='read_url'><i className="ri-lightbulb-flash-line"></i>&nbsp;&nbsp;Background</h2>
            <p>{readmeContent.background}</p>
            <h2 className='read_url mt-5'><i className="ri-search-eye-line"></i>&nbsp;&nbsp;Meaning</h2>
            <p>{readmeContent.meaning}</p>
            <p>{readmeContent.meaning2}</p>
            <p>{readmeContent.meaning3}</p>
            <h2 className='read_url mt-5'><i className="ri-tools-fill"></i>&nbsp;&nbsp;Technology Stack(s)</h2>
            <p className='read_skills'>
              {readmeContent.technologyStacks.join(', ')}
            </p>
            <h2 className='read_url mt-5'><i className="ri-settings-3-line"></i>&nbsp;&nbsp; Setup & Usage</h2>
            <div className='setup_box' style={{ whiteSpace: 'pre-line' }}>
              {readmeContent.setupUsage} 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Readme;
