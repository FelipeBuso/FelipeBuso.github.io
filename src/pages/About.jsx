import React from 'react';
import SideBar from '../components/Menu';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-section" id="outer-container">
      <SideBar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <div className="about-text" id="page-wrap">
        <h1>Sobre</h1>
        <h2>Estudante de Desenvolvimento Full Stack na <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe.</a></h2>
      <p>
        Apaixonado por tecnologia, inovação e solucionar problemas, descobri no desenvolvimento de software um meio para impactar positivamente a sociedade. 
      </p>
      <div className='personal'>
        <div className='hobbies'>
          <h2>Hobbies</h2>
          <p> Adoro literatura fantástica e de mistérios. Por sorte, possuia um farta biblioteca caseira, recheada com os livros da coleção Vagalume (acho que li quase todos da coleção), Agatha Christie, Stephen King, J. R. R. Tolkien, etc. Lêr exige concentração e imaginação, um ótimo exercício para fortalecer o cérebro e se distanciar de problemas em busca de uma solução.</p>
        </div>
        <div className='music'>
        <h2>Musica</h2>
        <p>Música é minha primeria paixão. Cresci ouvindo os clássicos como Queen, Rush, Led Zeppelin, etc. Descobri o Heavy Metal na juventude e hoje adoro New Metal. No final dos anos 90, comprei minha primeira bateria e formei uma banda no início dos anos 2000, o <a href='https://instagram.com/vortex.noshit?utm_medium=copy_link' rel="noreferrer" target="_blank">Vórtex</a>. Ainda nos reunimos para fazer um som até hoje. </p>
        </div>
        <div className='media'>
        <h2>Filmes e séries</h2>
        <p>Apaixonado pelas trilogias Matrix, Batman e Senhor dos Anéis, fã da MCU e adoro séries, principalmente as do norte europeu de mistério, como Dark, Katla, The Rain, etc. </p>
        </div>

      </div>
      </div>
    </div>
  )
}
