import React from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = ({ onClick }) => {
  return (
    <button className="main-btn scroll-to-top" onClick={onClick}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;
