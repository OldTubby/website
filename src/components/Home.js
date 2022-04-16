import React from 'react';
import she from '../images/She.JPG';

function Home() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='home'>
            <div className='vanGogh'>
              <figure>
                <blockquote className='blockquote'>
                  <p class='mb-0'>
                    What would life be if we had no courage to attempt anything?
                  </p>
                </blockquote>
                <hr></hr>
                <figcaption className='blockquote-footer'>
                  Vincent van Gogh
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className='row2'>
          <div className='col-md-6'>
            <div className='middleHome'>
              <div className='headline'>
                <h4>And Now For Something Completely Different...</h4>
                <hr></hr>
                <p>
                  I am so grateful for my years in Operations and Customer
                  Service. The people that I've had the opportunity to work
                  alongside are amazing, and many of them have inspired me to
                  take this crazy jump into Web Development.
                </p>
                <br></br>
                <p>
                  My software bootcamp was fantastic. It was challenging and I
                  loved every minute of it. Web Development has become a passion
                  and it represents art, science and a lifetime of learning for
                  me.
                </p>
                <br></br>
                <p>This is where it starts.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='she' src={she} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
