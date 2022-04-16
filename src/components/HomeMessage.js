import React from 'react';
import she from '../images/She.JPG';

function HomeMessage() {
  return (
    <>
      <div className='container'>
        <div className='row homeMessage'>
          <div className='col-md-6'>
            <h4>And Now For Something Completely Different...</h4>
            <hr></hr>
            <p>
              I am so grateful for my years in Operations and Customer Service.
              The people that I've had the opportunity to work alongside are
              amazing, and many of them have inspired me to take this crazy jump
              into Web Development.
            </p>
            <p>
              My software bootcamp was fantastic. It was challenging and I loved
              every minute of it. Web Development has become a passion and it
              represents art, science and a lifetime of learning for me.
            </p>
            <p>This is where it starts.</p>
          </div>
          <div className='col-md-6'>
            <div className='text-center'>
              <img
                className='she mx-auto d-block'
                src={she}
                alt='Chris and Renee'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMessage;
