import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import reactlogo from '../../assets/images/react.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <a href = "https://beautiful-ice-cream-builder-ui.netlify.app" ><img className={classes.logo} src={logo} alt="Logo" /></a>
        </div>
        <div className="textRight">
          <a href = "https://create-react-app.dev" target="_blank" rel="noreferrer"><img src={reactlogo} alt="React" className={classes.reactLogo} /></a>
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
