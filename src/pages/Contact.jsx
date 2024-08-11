import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="mb-5">Contact Me</h1>
      <div className="col-md-6">
        <h3 className="mb-4 me-5 fw-bold">궁금한 것이 있으시면 언제든 연락주세요.</h3>
        <address>
          <ul className="address me-5">
            <li className="py-2 border-bottom">
              <label>Company: </label>white water
            </li>
            <li className="py-2 border-bottom">
              <label>Address: </label>김포시 어딘가
            </li>
            <li className="py-2 border-bottom">
              <label>WebSite: </label>
              <a href="http://www.com" target="_blank" rel="noopener noreferrer">
                http://www.com
              </a>
            </li>
            <li className="py-2 border-bottom">
              <label>My Github: </label>
              <a href="http://github.com/b" target="_blank" rel="noopener noreferrer">
                http://github.com/b
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="col-md-6">
        <form>
          <div className="mb-3 me-4">
            <label htmlFor="name" className="form-label">
              Your name
            </label>
            <input type="text" className="form-control" id="name" placeholder="이름" />
          </div>
          <div className="me-3 me-4">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" placeholder="email" />
          </div>
          <div className="me-3 me-4">
            <label htmlFor="tel" className="form-label">
              Your Phone Number
            </label>
            <input type="tel" className="form-control" id="tel" placeholder="전화번호" />
          </div>
          <div className="mb-3 me-4">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea className="form-control" id="content" rows="4" placeholder="보내실 말씀"></textarea>
          </div>
          <div className="me-3 me-4">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;