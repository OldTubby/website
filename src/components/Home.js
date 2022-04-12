import React from 'react'
import horseFace from '../images/horseFace.jpg'

function Home() {
  return (
    <>
    <div className="home">
      <div className="vanGogh">
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
    <div className='middleHome'>
      <div className='headline'>
          <h5>Say Something Interesting</h5>
          <p>Nulla elementum ex non feugiat dignissim. In vel ultrices lectus. Phasellus felis ipsum, congue vitae blandit non, condimentum at turpis. Nullam eget lobortis lorem. Ut sollicitudin, leo eget dapibus consectetur, nulla enim fringilla eros, at aliquet ante magna nec leo. In sodales leo ac mauris blandit rhoncus. Vestibulum maximus tristique tortor id egestas. Fusce lacinia neque sed suscipit feugiat. Maecenas mollis et odio ac blandit. Donec eget vulputate massa.</p>
      </div>
      <div className="horseFace">
        <img src={horseFace} alt="Chris Leensvaart" />
      </div>
    </div>
    </>
  )
}

export default Home
