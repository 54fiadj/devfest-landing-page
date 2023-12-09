import React from 'react';
import illustrationSet1 from '../images/illustration-set-1.svg';
import illustrationSet2 from '../images/illustration-set-2.svg';
import devfestTitle from '../images/devfest-title.svg';
import calendar from '../images/calendar.svg';
import location from '../images/location.svg';

const Header = () => {
  return (
    <div>
        <div className='devfest-title'>
            <img className='doodles1' src={illustrationSet1} alt="doodles" />
            <img className='devfest-anim' src={devfestTitle} alt="devfest 2023" />
            <img className='doodles2' src={illustrationSet2} alt="doodles" />
        </div>
        <div className='date-location'>
            <div className='date'>
              <img src={calendar} alt="calendar icon" />
              <div>26 December 2023</div>
            </div>
            <div className='location'>
              <img src={location} alt="location icon" />
              <div>School of MalekBenNabi/Batna</div>
            </div>
        </div>
    </div>
  );
};

export default Header;
