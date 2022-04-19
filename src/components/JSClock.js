import React from 'react';
import javascriptclock from '../images/javascriptclock.png';

function JSClock() {
  return (
    <>
      <div className='container JavaClock'>
        <div className='row secondaryItemPortPadding'>
          <div>
            <h3>Java Script Clock</h3>
            <hr></hr>
            <p>JavaScript, JSS, HTML</p>
            <hr></hr>
            <br></br>
            <p>
              The 'timeless' app on every beginning developers list - a
              JavaScript powered clock. Also - a screenshot of a static clock is
              so very anti-climatic...but it avoids certain dangers of the
              internet.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col javascriptclock'>
            <a
              href='https://github.com/OldTubby/js-clock-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='clockPhoto d-block img-fluid mx-auto'
                src={javascriptclock}></img>
            </a>
          </div>
        </div>
      </div>
      {/* <div className='container'>
        <div className='row'>
          <div className='col'>
            <WorkingClock />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default JSClock;
