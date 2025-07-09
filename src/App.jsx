import { useState, useEffect } from 'react'        
import './App.css'
import { Link, Element } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll";
import GradientFrame from './GradientFrame';
import bgImage from './assets/background.jpeg';
import { FrontTitle, FrontName } from './Front.jsx';

const menuItems = [
  { href: 'work-experience', label: 'work experience' },
  { href: 'about', label: 'about' },
  { href: 'contact', label: 'contact' },
];


const Menu = () => (
  <>
    <nav style={{
      position: 'fixed',
      top: '14px',
      right: '20px',
      left: 'auto',
      bottom: 'auto',
      width: 'auto',
      zIndex: 1000,
      background: 'none',
      boxShadow: 'none',
      padding: 0
    }}>
      <ul style={{
        display: 'flex',
        flexDirection: 'horizontal',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        listStyle: 'none',
        margin: 5,
        padding: 0,
        background: 'none',
        width: 'auto',
       
        gap: '12px',
      }}>

        {menuItems.map((item, idx) => (
          <li key={item.href}>
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              className="menu-link p-border p-underline"
              style={{ cursor: 'pointer' }}
              spy={true}
              offset={-70}
            >
              <span style={{ color: '#888', fontWeight: 'bold', fontSize: '1.1em', marginRight: '6px' }}>{`0${idx + 1}.`}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);
import React from 'react';


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

function SocialVerticalMenu() {
  return (
    <div className="social-vertical-menu">
      <a href="https://www.linkedin.com/in/javier-soreta-encinas-8b70a1b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="28" height="28" fill="none" stroke="#5ec0c0" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M7 10v7M12 10v7M17 10v7M7 7h.01M12 7h.01M17 7h.01"/></svg>
      </a>
      <a href="http://github.com/lenmie" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg width="28" height="28" fill="none" stroke="#5ec0c0" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
      </a>
      <a href="http://instagram.com/javisurita" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="28" height="28" fill="none" stroke="#5ec0c0" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
      </a>
    </div>
  );
}
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="main-btn scroll-to-top"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 2000,
      }}
      onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
function App() {
  const workRef = React.useRef(null);

  useEffect(() => {
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
    document.body.style.minHeight = '100vh';
    const root = document.getElementById('root');
    if (root) {
      root.style.minHeight = '100vh';
      root.style.height = '100%';
    }
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.backgroundPosition = '';
      document.body.style.minHeight = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
      if (root) {
        root.style.minHeight = '';
        root.style.height = '';
      }
    };
  }, []);

  return (
    <>
      <Menu/>
      <SocialVerticalMenu/>
      <div className="center">
        <div className="center-content">
          <div style={{ flex: 1, textAlign: 'left', marginLeft: 0 }}>
            <FrontTitle>hi, my name is</FrontTitle>
            <FrontName>
              JAVIER SORETA<br />ENCINAS
            </FrontName>
          </div>
        </div>
        <p className="read-the-docs" style={{ opacity: 1.25 }}>
        </p>
      </div>
      <Element name="work-experience">
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <GradientFrame fontSize="1em">
            <div
              className="work-experience-section"
              ref={workRef}
              style={{
                fontSize: '1em',
                textAlign: 'left',
                maxWidth: '600px',
                margin: '0 0 0 auto',
                maxHeight: '320px',
                overflowY: 'auto',
                cursor: 'pointer',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                transition: 'box-shadow 0.2s',
              }}
            >
              <h2 style={{ fontSize: '1em', textAlign: 'left' }}>Work Experience</h2>
              <div className="work-block">
                <h3 style={{ fontSize: '1.1rem', textAlign: 'left' }}>GymSwype</h3>
                <ul>
                  <li><strong>Descripción:</strong> App de acceso a gimnasio y compra de planes</li>
                  <li><strong>Rol:</strong> Lead frontend developer, ingeniero autogestionado en despliegue, monitoreo y QA</li>
                  <li><strong>Duración:</strong> Junio 2024 – Presente</li>
                  <li><strong>Stack:</strong> Expo, TypeScript, React Native, Redux, RTK Query, Styled System, Firebase (analytics, crashlytics, perf)</li>
                  <li><strong>Tareas:</strong> Creación, testeo y despliegue de la app desde cero usando backend existente y nuevos diseños UI/UX</li>
                </ul>
              </div>
              <div className="work-block">
                <h3 style={{ fontSize: '1.1rem', textAlign: 'left' }}>Tenpo</h3>
                <ul>
                  <li><strong>Descripción:</strong> Aplicación bancaria</li>
                  <li><strong>Rol:</strong> Lead sub-product Frontend Mobile Developer</li>
                  <li><strong>Duración:</strong> Agosto 2022 – Abril 2024</li>
                  <li><strong>Stack:</strong> TypeScript, React Native, Redux/Thunk, Firebase push notifications, Styled-components</li>
                  <li><strong>Tareas:</strong> Desarrollo y mantenimiento de subproducto “User Financial Assessment”, trabajo en equipo, reuniones diarias, análisis y solución de problemas, pair programming, reportes, gestión de equipo, colaboración con devops/diseño/QA, onboarding de trainees</li>
                </ul>
              </div>
              <div className="work-block">
                <h3 style={{ fontSize: '1.1rem', textAlign: 'left' }}>MODO</h3>
                <ul>
                  <li><strong>Descripción:</strong> Aplicación bancaria</li>
                  <li><strong>Rol:</strong> Frontend Mobile Developer</li>
                  <li><strong>Duración:</strong> Febrero 2022 – Agosto 2022 (contrato fijo corto)</li>
                  <li><strong>Stack:</strong> TypeScript, React Native, Redux/Thunk, Testing Library, Detox, SonarCloud, Firebase Debugging, Bitrise</li>
                  <li><strong>Tareas:</strong> Desarrollo y mantenimiento de subproducto, trabajo en equipo grande, testing, control de calidad</li>
                </ul>
              </div>
              <div className="work-block">
                <h3 style={{ fontSize: '1.1rem', textAlign: 'left' }}>Uforia</h3>
                <ul>
                  <li><strong>Descripción:</strong> App de música/radio/podcast para Univision</li>
                  <li><strong>Rol:</strong> FullStack Developer</li>
                  <li><strong>Duración:</strong> Enero 2019 – Septiembre 2021</li>
                  <li><strong>Stack:</strong> Frontend: TypeScript, React Native, Redux/Thunk, Animation API, Firebase Analytics, Airship API. Backend: Java/Android, Java EE/Spring Boot, JUnit 5, Mockito, Quartz. DB: MySQL 5.6. Otros: AWS, SonarCloud, Firebase Debugging</li>
                  <li><strong>Tareas:</strong> Desarrollo de nuevas features, mantenimiento, reuniones diarias, reportes, colaboración con equipos multidisciplinarios, onboarding de nuevos integrantes</li>
                </ul>
              </div>
              <div className="work-block">
                <h3 style={{ fontSize: '1.1rem', textAlign: 'left' }}>Gym App</h3>
                <ul>
                  <li><strong>Descripción:</strong> Web app para gestión de pagos de clientes de gimnasio</li>
                  <li><strong>Rol:</strong> Creador del proyecto</li>
                  <li><strong>Duración:</strong> Enero 2018 – Diciembre 2018</li>
                  <li><strong>Stack:</strong> Frontend: JSP/JQuery. Backend: Java/Spring MVC. DB: Hibernate/MySQL 5.6</li>
                  <li><strong>Tareas:</strong> Venta, diseño, desarrollo, despliegue y mantenimiento de la app</li>
                </ul>
              </div>
            </div>
          </GradientFrame>
        </div>
      </Element>
      <Element name="about">
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <GradientFrame fontSize="1em">
            <div className="about-section" style={{ fontSize: '1em', textAlign: 'left', maxWidth: '480px', margin: '0' }}>
              <h2 style={{ fontSize: '1em', textAlign: 'left' }}>About</h2>
              <p>
                I’m a back-end developer with a strong focus on mobile applications.<br />
                Right now, I’m working on creating accessible, human-centered products that aim to improve user experiences and make technology more inclusive.
              </p>
            </div>
          </GradientFrame>
        </div>
      </Element>
      <ScrollToTopButton />
    </>
  )
}
export default App


