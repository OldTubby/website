import React from 'react';

function ResumeLinks() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 resumeContactCol d-flex justify-content-md-start justify-content-center'>
            <div className='linkedInResume'>
              <p>
                LINKEDIN:
                <br />
                <a
                  className='linkedInResumeLink'
                  href='https://linkedin.com/in/chrisleensvaart'
                  target='_blank'
                  rel='noopener noreferrer'>
                  linkedin.com
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-4 resumeContactColPers d-flex justify-content-md-center justify-content-center'>
            <div className='personalPortfolio'>
              <p>
                PORTFOLIO:
                <br />
                <a
                  className='portfolioResumeLink'
                  href='https://leensvaart.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  leensvaart.com
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-4 resumeContactColGit d-flex justify-content-md-end justify-content-center'>
            <div className='gitHubResume'>
              <p>
                GITHUB:
                <br />
                <a
                  className='gitHubResumeLink'
                  href='https://GitHub.com/OldTubby'
                  target='_blank'
                  rel='noopener noreferrer'>
                  GitHub.com/OldTubby
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeLinks;
