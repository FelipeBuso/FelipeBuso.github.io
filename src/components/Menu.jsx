import React from 'react';
import { slide as Menu } from 'react-burger-menu'

export default class SideBar extends React.Component {
  // showSettings (event) {
  //   event.preventDefault();

  // }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/projetos">Projetos</a>
      </Menu>
    );
  }
}