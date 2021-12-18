import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import {ReactComponent as SpetroLogo} from './spetroLogo.svg'
// import { Typography } from '@material-ui/core';
import typography from './../../styles/typography'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <div className="nav-container"> */}
        <NavLink to='/' className="navbar-brand" onClick={closeMobileMenu}>
            <SpetroLogo />
            <i className='fab fa-typo3' />
          </NavLink>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
              <NavLink
                to='/about'
                activeStyle={{ color:'#ca2128' }}
                style={{...typography.p314PxM, padding:'0.7vw'}}
                className="nav-link fontsize14px" 
                onClick={closeMobileMenu}
              >
                About us
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                to='/blogs'
                activeStyle={{ color:'#ca2128' }}
                style={{...typography.p314PxM, padding:'0.7vw'}}
                className="nav-link fontsize14px" 
                onClick={closeMobileMenu}
              >
               Blogs
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                to='/contactus'
                activeStyle={{ color:'#ca2128' }}
                style={{...typography.p314PxM, padding:'0.7vw'}}
                className="nav-link fontsize14px"
                onClick={closeMobileMenu}
              >
                Contact us
              </NavLink>
              </li>
            </ul>
        </div>
        {/* </div>   */}
    </nav>
    </>
  );
}

export default Navbar;