import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoImg from './assets/WhatsApp Image 2025-06-17 at 5.25.18 PM.jpeg';
import youtubeLogo from './assets/vecteezy_youtube-logo-png-youtube-icon-transparent_18930575.png';

const menuItems = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#work', label: 'work' },
  { href: '#contact', label: 'contact' },
];

const Menu = () => (
  <>
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        listStyle: 'none',
        margin: 0,
        padding: '20px',
        background: 'none',
        width: '100%',
        position: 'relative',
        right: '180px'
      }}>
        <li style={{ position: 'absolute', left: 0, top: '20px', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
          <img src={logoImg} alt="Logo" style={{ height: '40px', borderRadius: '8px' }} />
          <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '1.2em', color: '#137E7E', letterSpacing: '2px' }}>lenmie</span>
        </li>
        <div style={{ flex: 1 }}></div>
        {menuItems.map((item, idx) => (
          <li key={item.href}>
            <a href={item.href} className="menu-link">
              <span style={{ color: '#888', fontWeight: 'bold', fontSize: '1.1em', marginRight: '6px' }}>{`0${idx + 1}.`}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

import React from 'react'


const styles = {
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    background: 'white',
  },
  a: {
    display: 'block',
    padding: '15px 20px',
    color: '#0',
    textDecoration: 'none',
    transition: 'background 0.3s',
  }
};
const ResumeDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ position: 'fixed', top: 20, right: 20, zIndex: 1100 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="#resume" className="menu-resume">Resume</a>
      <ul className={`resume-fade-menu${open ? ' open' : ''}`}>
        <li>The Legend of Zelda</li>
        <li>Minecraft</li>
        <li>Fortnite</li>
        <li>Super Mario Bros.</li>
        <li>Among Us</li>
        <li>Call of Duty</li>
        <li>Pokémon GO</li>
        <li>League of Legends</li>
        <li>Grand Theft Auto V</li>
        <li>Counter-Strike</li>
      </ul>
    </div>
  );
};
function LogoTopLeft() {
  return (
    <div style={{ position: 'fixed', top: 20, left: 20, zIndex: 1200, display: 'flex', alignItems: 'center' }}>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer">
        <img src={logoImg} alt="Logo" className="logo-topleft" style={{ height: '48px', borderRadius: '8px' }} />
      </a>
      <span className="logo-topleft-text logo-topleft" style={{ marginLeft: '12px', fontWeight: 'bold', fontSize: '1.3em', color: '#137E7E', letterSpacing: '2px' }}>lenmie</span>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)
  const buttonRef = useRef(null);

  const handleClick = () => {
    setCount((count) => count + 1);
    const btn = buttonRef.current;
    if (btn) {
      btn.classList.remove('flash-purple');
      void btn.offsetWidth;
      btn.classList.add('flash-purple');
    }
  };

  return (
    <>
      <LogoTopLeft/>
      <Menu/>
      <ResumeDropdown/>

    <div>
      <p style={{ fontSize: '2px', fontWeight: 'bold', color: 'red' }}>
        peanut
      </p>
      <span style={{ fontSize: '1.5em' }}>
   
      </span>
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <span style={{ display: 'block', textAlign: 'center', opacity: 0.45 }}>Vite</span>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <span style={{ display: 'block', textAlign: 'center', opacity: 0.45 }}>React</span>
        </a>
      </div>
      <h1 style={{ opacity: 0.5 }}>Vite + React</h1>
      <div className="card">
        <button
          ref={buttonRef}
          onClick={handleClick}
          style={{ opacity: 0.45 }}
          className="flash-btn"
        >
          count is {count}
        </button>
        <p>
        
        </p>
      </div>
      <p className="read-the-docs" style={{ opacity: 1.25 }}>
        Click on the Vite and React logos to learn more like 
      </p>
      
    </>
  )
}
export default App


