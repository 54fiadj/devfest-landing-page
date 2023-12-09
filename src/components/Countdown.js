import React, { useState, useEffect } from 'react';
import daysBox from '../images/days.svg';
import hoursBox from '../images/hours.svg';
import minutesBox from '../images/minutes.svg';
import secondsBox from '../images/seconds.svg';
import arrow from '../images/countdown-arrow.svg';

const Countdown = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <div className='countdown'>
        <img className='arrow' src={arrow} alt="" />
        <div className='box'>
          <img src={daysBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.days}</div>
            <div>Days</div>
          </div>
        </div>
        <div className='box'>
          <img src={hoursBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.hours}</div>
            <div>Hours</div>
          </div>
        </div>
        <div className='box'>
          <img src={minutesBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.minutes}</div>
            <div>Min</div>
          </div>
        </div>
        <div className='box'>
          <img src={secondsBox} alt="" />
          <div className='remaining'>
            <div className='number'>{timeRemaining.seconds}</div>
            <div>Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
