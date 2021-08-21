import React from 'react';
import CardProject from '../components/CardProject';
import Header from '../components/Header';
import projetos from '../ProjectList';
// import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <Header />
      { projetos.map((project, i) => (
        <CardProject key={ i } project={ project } />
      ))}
      {/* <h3>Trybewallet</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/G9oEgL2q5ss?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <a href="https://FelipeBuso.github.io/trybewallet">Ver projeto</a> */}
    </div>
  )
}
