import React from 'react';
import MarkdownBlog from './MarkdownBlog';
import MobileApp from './MobileApp';
import TechIcon from './TechIcon';
import TechName from './TechName';
import TicTacToe from './TicTacToe';
import TruckU from './TruckU';
import JSClock from './JSClock';

function Portfolio() {
  return (
    <>
      <TechIcon />
      <TechName />
      <TruckU />
      <MobileApp />
      <MarkdownBlog />
      <TicTacToe />
      <JSClock />
    </>
  );
}

export default Portfolio;
