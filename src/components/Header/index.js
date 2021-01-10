import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo-platzi-video-BW2.png'
import UserIcon from '../../assets/images/user-icon.png'
import '../../assets/styles/components/Header.scss'

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={Logo} alt="Platzi Video"/>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={UserIcon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/">Cuenta</Link></li>
        <li><Link to="/">Cerrar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;

