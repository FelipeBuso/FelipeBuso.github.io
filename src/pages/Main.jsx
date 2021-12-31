import React from 'react'
// import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
import SideBar from '../components/Menu';
import '../styles/Main.css';

export default function Main() {
  return (
    <div className="main-section" id="outer-container">
      <SideBar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <div className="main-div" id="page-wrap">
        <div className="text-main-section">
          <h2>PORTFÓLIO</h2>
          <h1>Felipe Buso</h1>
          <h2>DESENVOLVEDOR WEB FULL STACK</h2>
        </div>
        <div className="links-header-section">
        <a href="https://www.linkedin.com/in/felipebuso/" target="_blank" rel="noreferrer"><i className="toplink fab fa-linkedin"></i></a>
        <a href="https://github.com/FelipeBuso" target="_blank" rel="noreferrer"><i className="toplink fab fa-github"></i></a>
        <a href="mailto:felipe_buso@hotmail.com"><i className="toplink far fa-envelope"></i></a>
      </div>
      </div>
    </div>
  )
}
