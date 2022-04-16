import React from 'react';
import she from '../images/She.JPG';

function TechStackLeft() {
  return (
    <>
      <div className='portfolioBody'>
        <div className='container'>
          <div className='row middleHome'>
            <div className='col-md-6'>
              <div>
                <img className='she' src={she} />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='middleHome'>
                <h4>Hello</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStackLeft;
