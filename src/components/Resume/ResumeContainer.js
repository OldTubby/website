import React from 'react';

function ResumeContainer(props) {
  return (
    <>
      <div className='container resContainer'>{props.children}</div>
    </>
  );
}

export default ResumeContainer;
