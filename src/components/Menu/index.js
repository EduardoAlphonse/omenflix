import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/omenflix_logo.png';
import Button from '../Button';

import plusIcon from '../../assets/icons/plus_icon.svg';

import './index.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Duflix logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
        {' '}
        <img src={plusIcon} width={13} alt="plus icon" />
      </Button>
    </nav>
  );
}

export default Menu;
