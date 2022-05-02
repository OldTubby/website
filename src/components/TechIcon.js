import React from 'react';
import mongodblogo from '../images/mongodblogo.png';
import reacticon from '../images/reacticon.png';
import angular from '../images/angular.png';
import javascript from '../images/javascript.png';
import html from '../images/html.png';
import css from '../images/css.png';
import mysql from '../images/mysql.png';
import node from '../images/node.png';
import ionic from '../images/ionic.png';

function TechIcon() {
  return (
    <>
      <div className='container'>
        <div className='row techIcon gy-3'>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={reacticon}
                alt='React Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={angular}
                alt='Angular Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={javascript}
                alt='JavaScript Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={html}
                alt='HTML Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={css}
                alt='CSS Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={mongodblogo}
                alt='mongo DB Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={mysql}
                alt='MySQL Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={node}
                alt='Node Icon'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks stackShadow img-fluid'
                src={ionic}
                alt='Ionic Icon'
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechIcon;
