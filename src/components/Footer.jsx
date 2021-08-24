import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  const location = useLocation().pathname;
  console.log(location);

  // function buttonHome() {
  //   return <Link className="button-home" to="/">Início</Link>
  
  // }
  return (
    <div className="footer-section">
      <div className="button-section">
        { location !== '/' && <Link className="button-home fadeIn" to="/">Início</Link> }
      </div>
    </div>
  )
}
