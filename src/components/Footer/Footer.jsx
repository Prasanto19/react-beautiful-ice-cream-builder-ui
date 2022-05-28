import React from 'react';
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <div className={`container ${classes.container}`}>
        <div>
          Copyright &copy;{new Date().getFullYear()}.{/* {Dyanamic year} */}
        </div>
        <div className="textRight">
          Built with <span className="red">&hearts;</span> by{' '}
          <a
            href="https://reactjs.org/docs/create-a-new-react-app.html"
            target="_blank"
            rel="noreferrer"
          >
            Create React App
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
