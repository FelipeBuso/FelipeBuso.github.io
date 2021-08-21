import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Main.css';

export default function Main() {
  return (
    <div className="main-section">
      <h1>Olá, meu nome é Felipe Buso</h1>
      <h2>Sou estudante de desenvolvimento web full stack na Trybe</h2>
      <div className="button-main-section">
        <Link to="/projetos">
          <h3>Projetos</h3>
        </Link>
        <Link to="/contato">
          <h3>Contato</h3>
        </Link>
      </div>
    </div>
  )
}
