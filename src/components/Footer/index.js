import React from 'react';
import { FooterBase } from './styles';
import OmenflixLogo from '../../assets/images/omenflix_logo_big.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={OmenflixLogo} alt="Logo Omenflix" width={50} />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        {' '}
        ❤️
      </p>
    </FooterBase>
  );
}

export default Footer;
