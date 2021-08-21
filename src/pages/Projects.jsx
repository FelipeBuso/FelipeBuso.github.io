import React from 'react';
import CardProject from '../components/CardProject';
import Header from '../components/Header';
import projetos from '../ProjectList';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <div className="projects-section">
      <Header />
      <div className="project-cards-div">
        { projetos.map((project, i) => (
          <CardProject key={ i } project={ project } />
        ))}
      </div>
    </div>
  )
}
