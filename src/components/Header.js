import React from 'react';
import illustrationSet1 from '../images/illustration-set-1.svg';
import illustrationSet2 from '../images/illustration-set-2.svg';
import illustrationSet1Mob from '../images/illustration-set-1-mob.svg';
import illustrationSet2Mob from '../images/illustration-set-2-mob.svg';
import devfestTitle from '../images/devfest-title.svg';
import puzzle1 from '../images/puzzle-piece-1.svg';
import puzzle2 from '../images/puzzle-piece-2.svg';
import calendar from '../images/calendar.svg';
import location from '../images/location.svg';

const Header = () => {
  return (
    <div>
        <div className='devfest-title'>
            <img className='doodles1 desk' src={illustrationSet1} alt="doodles" />
            <img className='doodles1 mob' src={illustrationSet1Mob} alt="doodles" />
            <div className='devfest-anim'>
              <img className='puzzle1' src={puzzle1} alt="" />
              <div className='title-container'>
                <img className='title' src={devfestTitle} alt="" />
              </div>
              <img className='puzzle2' src={puzzle2} alt="" />
            </div>
            <img className='doodles2 desk' src={illustrationSet2} alt="doodles" />
            <img className='doodles2 mob' src={illustrationSet2Mob} alt="doodles" />
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
