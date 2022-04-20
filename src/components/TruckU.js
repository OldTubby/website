import React from 'react';
import truckuprofile from '../images/truckuprofile.png';

function TruckU() {
  return (
    <>
      <div className='container'>
        <div className='row portfolioPadding'>
          <div>
            <h3>TRUCK-U: A Social Network for the Transporation Industry</h3>
            <hr></hr>
            <p>Angular, Node.js, Express.js, MongoDB, HTML, CSS, TypeScript</p>
            <hr></hr>
            <br></br>
            <p>
              The last project from my Full Stack bootcamp was to create a CRUD
              application and this was a lot of fun.
            </p>
            <p>
              This is designed specifcally for the transportation industry that
              would allow drivers and businesses the opportunity to connect.
              Users can login, update profiles and post thoughts to the site.
              Future enhancements include connecting with API's that will allow
              for maps/navigation, places of interest, stock prices and
              emergency service contacts.
            </p>
          </div>
        </div>
        <div className='truckUPic'>
          <a
            href='https://github.com/Woz-U-Group-Projects/team-2'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='truckuprofilepic mx-auto d-block img-fluid'
              src={truckuprofile}
              alt='profile page'
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default TruckU;
