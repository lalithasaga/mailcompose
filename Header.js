/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import  { Authactions } from './Redux/Auth';



const Header = () => {
  const isLogin = useSelector(state => state.Auth.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(Authactions.logout())
    navigate('/');
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="My Web Link Logo" />
        <span className="logo-text">MyWeb Link</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          {isLogin && (
            <>
             <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header; */


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { Authactions } from './Redux/Auth';
import EmailComposer from './EmailComposer'; // Import the EmailComposer component

const Header = () => {
  const isLogin = useSelector((state) => state.Auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showComposeEmail, setShowComposeEmail] = useState(false); // State to control the visibility of the email composer

  const logoutHandler = () => {
    dispatch(Authactions.logout());
    navigate('/');
  };

  const handleComposeEmail = () => {
    setShowComposeEmail(true);
  };

  const closeComposeEmail = () => {
    setShowComposeEmail(false);
  };

  return (
    <div>
      <header className="header-container">
        <div className="logo">
          <img src={logo} alt="My Web Link Logo" />
          <span className="logo-text">MyWeb Link</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {isLogin && (
              <>
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
                <li>
                  <button onClick={handleComposeEmail}>Compose Email</button> {/* Compose Email button */}
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      {showComposeEmail && (
        <div className="compose-email-container">
          <EmailComposer onClose={closeComposeEmail} />
        </div>
      )}
    </div>
  );
};

export default Header;



