import React from 'react';
import compass from '../images/compass.jpg';

function Showcase() {
  return (
    <>
      <section className='bg-black text-light p-5'>
        <div className='container showCaseContainer'>
          <div className='row showcase gx-10'>
            <div className='col-md-7 d-sm-flex line'>
              <figure>
                <blockquote className='blockquote blockUp'>
                  <p className='mb-0'>
                    What would life be if we had no{' '}
                    <span class='text-warning'>courage</span> to attempt
                    anything?
                  </p>
                </blockquote>
                <figcaption className='blockquote-footer'>
                  Vincent van Gogh
                </figcaption>
              </figure>
            </div>
            <div className='col-md-5'>
              <img
                className='compass img-fluid d-none d-md-block'
                src={compass}
                alt='Compass'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
