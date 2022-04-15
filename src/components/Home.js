import React from 'react';
import she from '../images/She.JPG';
import { createPath, Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='home'>
            <div className='vanGogh'>
              <figure>
                <blockquote className='blockquote'>
                  <p class='mb-0'>
                    What would life be if we had no courage to attempt anything?
                  </p>
                </blockquote>
                <hr></hr>
                <figcaption className='blockquote-footer'>
                  Vincent van Gogh
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className='row2'>
          <div className='col-md-6'>
            <div className='middleHome'>
              <div className='headline'>
                <h5>And Now For Something Completely Different</h5>
                <p>I love coding!</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='she' src={she} />
          </div>
        </div>
        <div className='row3'>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png
'
              />
            </li>
          </div>
          <div className='col'>
            <li>
              <img
                className='stacks'
                src='https://www.seekpng.com/png/full/385-3852777_ionic-icon-png.png'
              />
            </li>
          </div>
        </div>
        <div className='row3'>
          <div className='col'>
            <li>
              <p className='stacks'>React</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>Angular</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>JavaScript</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>HTML</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>CSS</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>MongoDB</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>MySQL</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>Node.js</p>
            </li>
          </div>
          <div className='col'>
            <li>
              <p className='stacks'>Ionic</p>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
