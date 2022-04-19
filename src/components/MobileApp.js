import React from 'react';
import Cover from '../images/Cover.png';
import TOC from '../images/TOC.png';
import Ch1 from '../images/Ch1.png';
import Ch2 from '../images/Ch2.png';

function MobileApp() {
  return (
    <>
      <div className='container'>
        <div className='row secondaryItemPortPadding'>
          <div>
            <h3>Mobile Development: Application for Reading</h3>
            <hr></hr>
            <p>Cordova, Ionic</p>
            <hr></hr>
            <br></br>
            <p>
              My first experience with building a mobile app and I'm hooked. The
              project was part of my Bootcamp curriculum and we were given
              creative license for the content, but needed to meet requirements
              such as the front cover, working table of contents, multiple
              chapters and active navigation for each page.
            </p>
            <p>
              All I can say is that when you have the chance to create a fake
              book about Bill Murray - you take it.
            </p>
          </div>
        </div>
        <div className='row mobilePics gy-4'>
          <div className='col-md-3'>
            <a
              href='https://github.com/OldTubby/ionic-book-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='mobilePic img-fluid' src={Cover} />
            </a>
          </div>
          <div className='col-md-3'>
            <a
              href='https://github.com/OldTubby/ionic-book-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='mobilePic img-fluid' src={TOC} />
            </a>
          </div>
          <div className='col-md-3'>
            <a
              href='https://github.com/OldTubby/ionic-book-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='mobilePic img-fluid' src={Ch1} />
            </a>
          </div>
          <div className='col-md-3'>
            <a
              href='https://github.com/OldTubby/ionic-book-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='mobilePic img-fluid' src={Ch2} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileApp;
