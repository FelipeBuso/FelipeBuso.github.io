import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Main.css';

export default function Main() {
  return (
    <div className="main-section">
      <Header />
      <div className="main-div">
        <div className="text-main-section">
          <h1>Olá, meu nome é Felipe Buso.</h1>
          <h2>Sou estudante de Desenvolvimento Web Full Stack na Trybe.</h2>
        </div>
        <div className="button-main-section">
          <Link to="/projetos">
            <h3>PROJETOS</h3>
          </Link>
          <Link to="/sobre">
            <h3>SOBRE</h3>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
