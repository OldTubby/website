import React from 'react';

function TopContact() {
  return (
    <>
      <div className='container resumePadding'>
        <div className='row'>
          <div className='col'>
            <a
              href='https://drive.google.com/file/d/1uVS9ktyqAKj1r-y8ewlxEUpCc2ZhQ-m6/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'>
              <h6>Click To Download</h6>
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h1>Chris Leensvaart</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 topCity d-flex justify-content-md-start justify-content-center'>
            <p>Little Elm, TX</p>
          </div>
          <div className='col-md-4 topEmail d-flex justify-content-md-center justify-content-center'>
            <p>cleensvaart@gmail.com</p>
          </div>
          <div className='col-md-4 topPhone d-flex justify-content-md-end justify-content-center'>
            <p>214.585.8414</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopContact;
