import React from 'react'

const Projects = () => {
  return (
    <section id="projects">
    <div className="about-box">
    <h1 className='black_font'><i class="ri-links-line"></i>Projects</h1>
    <div className="row black_font mt-5">
      <div className="col-md-6">
        <div className="project_card">
        <img 
                src="https://github.com/user-attachments/assets/8a173180-9a4d-44d7-99fa-35b4788e1cd3" 
                width="420" 
                height="400" 
                style={{ Width: '420px', height: '400px', borderRadius: '1rem'}} // JSX에서 style 객체 형태로 변경
                alt="Project"
              />
        </div>
      </div>
        <div className="col-md-6">
        <div className="project_card">
        
        </div>
      </div>
        <div className="col-md-6 mt-5">
        <div className="project_card">
     
        </div>
      </div>
      <div className="col-md-6 mt-5">
        <div className="project_card">
       
        </div>
      </div>
      </div>
    </div>  
      </section>

    
  )
}

export default Projects