import React from 'react';
import seulogo from '../../images/seulogo.png';

function Education() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col educationTitle'>
            <h5>EDUCATION:</h5>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <img className='southEasternLogo img-fluid' src={seulogo} />
              <br />
              <p className='degreeName'>
                Full Stack Developer Bootcamp
                <br />
                2021-2022
              </p>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
              <img className='southEasternLogo img-fluid' src={seulogo} />
              <br />
              <p className='degreeName'>
                Associates of Arts
                <br />
                2019-2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
