import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
    <h1>Skills</h1>
    <ul className="myskill">
        <li>
          <h5>Java Servlet</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
              99%
            </div>
          </div>
        </li>
        <li>
          <h5>Spring framework</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              80%
            </div>
          </div>
        </li>
        <li>
          <h5>React</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              95%
            </div>
          </div>
        </li>
        <li>
          <h5>JavaScript</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              80%
            </div>
          </div>
        </li>
        <li>
          <h5>HTML</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
              70%
            </div>
          </div>
        </li>
        <li>
          <h5>CSS</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              90%
            </div>
          </div>
        </li>
        <li>
          <h5>NodeJS</h5>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              90%
            </div>
          </div>
        </li>
      </ul>

    </section>
  )
}

export default Skills