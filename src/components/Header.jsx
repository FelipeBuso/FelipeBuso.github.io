import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="header-section">
      {/* <h3>Contatos</h3> */}
      <div className="links-header-section">
        <a href="https://www.linkedin.com/in/felipebuso/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/FelipeBuso" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="mailto:felipe_buso@hotmail.com"><i className="far fa-envelope"></i></a>
      </div>
    </div>
  )
}
