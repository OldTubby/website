import React from 'react';
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.png';

function MarkDownBlog() {
  return (
    <>
      <div className='container'>
        <div className='row secondaryItemPortPadding'>
          <div>
            <h3>Markdown Blog</h3>
            <hr></hr>
            <p>JavaScript, Node.js, HTML, CSS, Express, EJS, MongoDB</p>
            <hr></hr>
            <br></br>
            <p>
              I was looking for a way to build on the EJS and Express routing
              skills that I learned during my Full Stack Bootcamp. This is an
              early example of a project that I took on, outside of the
              curriculum to better understand the concepts that I learned.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 blogPhoto'>
            <a
              href='https://github.com/OldTubby/markdown_blog'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='blogPhoto img-fluid' src={blog1}></img>
            </a>
          </div>
          <div className='col-md-6 blogPhoto'>
            <a
              href='https://github.com/OldTubby/markdown_blog'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='blogPhoto img-fluid' src={blog2}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarkDownBlog;
