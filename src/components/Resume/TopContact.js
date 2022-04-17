import React from 'react';

function TopContact() {
  return (
    <>
      <div className='container resumePadding'>
        <div className='row'>
          <div className='col'>
            <h1>Chris Leensvaart</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 topCity'>
            <p>Little Elm, TX</p>
          </div>
          <div className='col-md-4 topEmail'>
            <p>chris@leensvaart.com</p>
          </div>
          <div className='col-md-4 topPhone'>
            <p>214.585.8414</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopContact;
