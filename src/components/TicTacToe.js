import React from 'react';
import tictactoe from '../images/tictactoe.png';
import xWins from '../images/xWins.png';

function TicTacToe() {
  return (
    <>
      <div className='container'>
        <div className='row secondaryItemPortPadding'>
          <div>
            <h3>Tic Tac Toe</h3>
            <hr></hr>
            <p>JavaScript, JSS, HTML</p>
            <hr></hr>
            <br></br>
            <p>
              A classic game in the browser that relies very heavily on JSS
              styling - lots of learning for me here. This game allows you to
              reset/start over...and will alert when someone wins or if there is
              a draw.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 tictactoe'>
            <a
              href='https://github.com/OldTubby/tic-tac-toe'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='tictactoe img-fluid'
                src={tictactoe}
                alt='tictactoe 1'></img>
            </a>
          </div>
          <div className='col-md-6 tictactoe'>
            <a
              href='https://github.com/OldTubby/tic-tac-toe'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='tictactoe img-fluid'
                src={xWins}
                alt='tictactoe 2'></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
