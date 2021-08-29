import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-section">
      <Header/>
      <div className="about-text">
        <h1>Felipe Buso</h1>
        <h2>Estudante de Desenvolvimento Full Stack na <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe.</a></h2>
        <h3>Em transição de carreira, mas sempre com tecnologia ao meu redor, trabalhei nas áreas de produção de confecção e comércio exterior, onde desenvolvi trabalho em equipe, resiliência, senso de dono e liderança.</h3>
        <h3>Sempre acreditei que foco e perseverança são a chave  para desenvolver meus conhecimentos técnicos e habilidades interpessoais.</h3>
        <h2>Sempre aprendendo, sempre em evolução!</h2>
      </div>
      <Footer />
    </div>
  )
}
