import React from 'react';
import truckuprofile from '../images/truckuprofile.png';

function TruckU() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          {/* <div className='row middleHome'>
          <div className='col'> */}
          <div>
            <h3>TRUCK-U: Social Network for the Transporation Industry</h3>
            <hr></hr>
            <p>Angular, Node.js, Express.js, MongoDB, HTML, CSS, TypeScript</p>
            <hr></hr>
            <p>April 2022</p>
            <br></br>
            <p>
              A web application designed speciUcally for the transportation
              industry that would allow drivers and businesses the opportunity
              to connect. Psers can login, update proUles and post thoughts to
              the site. Future enhancements include connecting with AI:s that
              will allow for maps/navigation, places of interest, stock prices
              and emergency service contacts.
            </p>
          </div>
        </div>
        <div>
          <img
            className='truckuprofilepic mx-auto d-block img-fluid'
            src={truckuprofile}
          />
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
}

export default TruckU;
