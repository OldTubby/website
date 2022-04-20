import React from 'react';
import ResumeLinks from './ResumeLinks';
import TopContact from './TopContact';
import Objective from './Objective';
import Education from './Education';
import WorkHistory from './WorkHistory';
import ResumeContainer from './ResumeContainer';

function Resume() {
  return (
    <>
      <ResumeContainer>
        <TopContact />
        <ResumeLinks />
        <Objective />
        <Education />
        <WorkHistory />
      </ResumeContainer>
    </>
  );
}

export default Resume;
