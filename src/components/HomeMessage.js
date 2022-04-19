import React from 'react';
import she from '../images/She.JPG';

function HomeMessage() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row homeMessage'>
          <div className='col-md-6'>
            <h4>And Now For Something Completely Different...</h4>
            <hr></hr>
            <p>
              This journey began last year when my wife challenged me to take a
              risk and pursue what I've always wanted to do: Software
              Development. There are plenty of reasons why this may not be the
              smartest career move, but she knows that I really want this and
              keeps encouraging me to go for it.
            </p>
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
                className='she mx-auto d-sm-block'
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
