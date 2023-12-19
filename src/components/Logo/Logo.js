import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='tiltLogo br4 shadow-2' scale={1.1}>
        <div className='pa4' style={{height: '100%'}}>
          <img style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
