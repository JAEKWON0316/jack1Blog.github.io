  import React, { useState, useEffect } from 'react';
  import Carousel from '../pages/Carousel'; // Carousel 컴포넌트 import
  import Readme from '../pages/Readme';
  import projectData from '../db/data.json'; // data.json을 가져옴

  const Projects = () => {
    const [showCarousel, setShowCarousel] = useState(null); // 어떤 Carousel을 열지 저장
    const [showReadme, setShowReadme] = useState(null); // README 상태 관리
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      // 프로젝트 데이터를 가져와서 state에 설정
      setProjects(projectData.projects); // projects에 직접 접근
    }, []);

    const handleGitHubClick = (githubLink) => {
      // GitHub 저장소 링크로 이동
      window.open(githubLink, '_blank');
    };

    const handleImageClick = (index) => {
      // 해당 이미지의 index에 맞는 카루셀 열기
      setShowCarousel(index);
    };
    
    const handleReadmeClick = (index) => {
      // README 열기
      setShowReadme(index);
    };
  
    const closeCarousel = () => {
      setShowCarousel(null); // 카루셀 닫기
    };

    const closeReadme = () => {
      setShowReadme(null); // README 닫기
    };
  
    return (
      <section id="projects">
        <div className="basic_box">
          <span className="intro">"제가 만든 작품들"</span>
          <h1 className='mb-5 black_font flex_underline'>
            <i className="ri-links-line"></i>
            <span className="block_underline">Projects</span>
          </h1>
          
          <div className="row black_font mt-5">
            {projects.map((project, index) => (
              <div className="col-md-6 mb-5" key={index}>
                <div className="project_card">
                  <img 
                    src={project.image}
                    width="420" 
                    height="400" 
                    style={{ width: '420px', height: '400px', borderRadius: '1rem'}} 
                    alt={project.title}
                  />
                  <div className="text_box basic_font">
                    <h4 className='title1 black_font'>{project.title}</h4>
                    <div className="time1">
                      {project.date}
                    </div>
                    <h5 className='project_intro mb-2'>
                      {project.description}
                    </h5>
                    <div>
                      <ul className='project_intro2'>
                        {project.highlights.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='project_link'>
                      <i className="ri-link-m link_color"></i>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.link}
                      </a>
                    </div>
                    <div className='project_language mt-2'>
                      {project.languages.join(', ')}
                    </div>
                    <div className="project_btn mt-3">
                      <button type='button' className="p_btn_1" onClick={() => handleGitHubClick(project.github)}>
                        <i className="ri-github-fill"></i>GitHub 저장소
                      </button>
                      <button className="p_btn_1" onClick={() => handleImageClick(index)}>
                        <i className="ri-file-image-line"></i>이미지
                      </button>
                      {index <= 1 && (
                      <button className="p_btn_1" onClick={() => handleReadmeClick(index)}>
                      <i className="ri-book-open-line"></i>README
                      </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-6">
              <div className="project_card">
                <div className='project_more'>...더보기</div>
                <div className="text_box2 basic_font">
                  <h3 className='project_more2'><span className='red_star'>*</span>프로젝트는 계속 개발될 예정입니다.</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="project_banner mt-5 text-c">
            <h5 className='project_text'>*더 많은 프로젝트들을 개발하기 위해 노력하겠습니다.</h5>
          </div>
        </div>

        {/* 단일 카루셀 컴포넌트 표시 */}
        {showCarousel !== null && (
          <Carousel id={showCarousel + 1} onClose={closeCarousel} />
        )}
        {/* 단일 카루셀 컴포넌트 표시 */}
        {showReadme !== null && (
          <Readme readmeId={showReadme + 1} onClose={closeReadme} />
        )}
      </section>
    );
  }

  export default Projects;
