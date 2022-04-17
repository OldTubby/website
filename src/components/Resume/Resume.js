import React from 'react';
import ResumeLinks from './ResumeLinks';
import TopContact from './TopContact';
import Objective from './Objective';
import Education from './Education';
import WorkHistory from './WorkHistory';

function Resume() {
  return (
    <>
      <TopContact />
      <ResumeLinks />
      <Objective />
      <Education />
      <WorkHistory />
    </>
  );
}

export default Resume;
