import React from 'react';

function Objective() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 objectiveTitle'>
            <h5>OBJECTIVE:</h5>
          </div>
          <div className='col-md-4 objectiveTitle'>
            <h5>TOP SKILLS:</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8 objectiveText'>
            <p>
              Successful leader in the technology space via implementation,
              customer service, and consultative services, with the goal of
              transitioning into software development. Recently completed Full
              Stack bootcamp and seeking a position that allows for growth,
              learning and the opportunity to build code.
            </p>
          </div>
          <div className='col-md-2 objectiveList'>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Angular</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className='col-md-2 objectiveList'>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objective;
