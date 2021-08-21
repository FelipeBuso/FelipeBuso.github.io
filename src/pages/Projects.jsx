import React from 'react'
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h3>Trybewallet</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/G9oEgL2q5ss?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Link to="/trybewallet">
        <h4>Ver projeto</h4>
      </Link>
    </div>
  )
}
