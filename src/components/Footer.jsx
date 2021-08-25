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
        <Link
          className={ location === '/' ? "hidden button-home fadeIn" : "button-home fadeIn"}
          to="/">Início
        </Link>
        <h6 className="copyrigth">Felipe Buso <i className="far fa-copyright"></i></h6>
      </div>
    </div>
  )
}
