import React from 'react';

function WorkHistory() {
  return (
    <>
      <div className='container'>
        <br />
        <div className='row'>
          <div className='col-md-3 employerTitle'>
            <h5>WORK EXPERIENCE:</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <p className='employerName'>
              ENTOUCH Controls
              <br />
              <span className='jobTitle'>Customer Support Manager</span>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 jobCity'>
            <p>Richardson, TX</p>
          </div>
          <div className='col-md-6 jobTerm'>
            <p>October 2016 - Present</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <span>
              ENTOUCH is a growing technology company in the energy management
              space. In order to keep up with customer demand, they needed to
              grow their Customer Support capabilities and develop additional
              services offerings.
            </span>
            <ul>
              <li>
                Implemented call center technology that allowed for automatic
                customer contact, resulting in a total contact capacity increase
                of 10x.
              </li>
              <li>
                Enhanced operations processes by increasing our utilizion of
                Salesforce objects, reporting and workflows, to better capture
                agent activity and distribute customer requests.
              </li>
              <li>
                Managed call center operations - responsible for performance,
                agent training, quality-assurance, process implementation and
                team culture.
              </li>
              <li>
                In 2020, seamlessly transitioned the call center operations from
                an off-based to a work-from-home team. Call center performance
                metrics and team-member satisfaction dramatically increased.
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <p className='employerName'>
              DealerTrack (aquired by Cox Automotive)
              <br />
              <span className='jobTitle'>Director, Client Services</span>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 jobCity'>
            <p>Dallas, TX</p>
          </div>
          <div className='col-md-6 jobTerm'>
            <p>March 2014 - March 2016</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <span>
              DealerTrack developed the concept of an online credit portal that
              could connect automotive dealerships directly to their lenders,
              both speeding up and adding efficiences to the dealership sales
              process. Dealertrack grew into the signature SaaS provider for
              every aspect of dealership operations.
            </span>
            <ul>
              <li>
                Directed operations of call centers in Dallas, TX and New Haven,
                CT. Responsible for 125+ team members supporting multiple
                independent software products.
              </li>
              <li>
                Launched Service team integration wtih our Engineering and
                Product Management teams to provide client feedback, measure
                issue criticality and provide QA testing for product releases.
              </li>
              <li>
                Managed service relationships with strategic dealer group
                partners, OEMs and third-party vendors.
              </li>
              <li>
                Increased the call center capacity by focusing on team member
                development and process improvement, resulting in the ability to
                manage 20% higher call volume without increasing employee
                headcount.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkHistory;
