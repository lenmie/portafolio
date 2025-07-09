import React from 'react';
import './GradientFrame.css';

export default function GradientFrame({ children, fontSize = '1em' }) {
  return (
    <div className="gradient-frame" style={{ fontSize }}>
      {children}
    </div>
  );
}
