import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
      <h1>Bienvenue sur Homemade-Clothink</h1>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>CASQUETTES</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>VESTES</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>CHAUSSURES</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>TOILES</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>MOBILIER</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default HomePage;