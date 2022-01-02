import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardProject.css';


export default function CardProject({ project }) {
  const { nome, linkVideo, linkImage, linkProjeto, linkRepo, descricao, stack } = project;
  return (
    <div className="card-project-section">
      <h2>{ nome }</h2>
      {
        stack === 'front-end' 
        ? <iframe 
        width="560"
        height="315"
        src={ linkVideo }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      : <img src={ linkImage } alt={ nome } />
      }
      
      <p>{ descricao }</p>
      <div className="div-buttons">
        {
          stack === 'front-end' && <a target="_blank" rel="noreferrer" href={ linkProjeto }><h3>VER PROJETO</h3></a>
        }
        <a target="_blank" rel="noreferrer" href={ linkRepo }><h3>REPOSITÓRIO</h3></a>
      </div>
    </div>
  )
}

CardProject.propTypes = {
  project: PropTypes.shape({
    nome: PropTypes.string,
    stack: PropTypes.string,
    linkVideo: PropTypes.string,
    linkImage: PropTypes.string,
    linkProjeto: PropTypes.string,
    linkRepo: PropTypes.string,
    descricao: PropTypes.string,
  }).isRequired,
};
