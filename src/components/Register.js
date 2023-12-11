import React from 'react';
import RButton from '../images/register-button.svg'
import RButtonMob from '../images/register-button-mob.svg';

const Register = () => {
  return (
    <div>
        <div className='register-button'>
            <div className='container'>
                <img className='desk' src={RButton} alt="register" />
                <img className='mob' src={RButtonMob} alt="register" />
                <div>Register</div>
            </div>
        </div>
    </div>
  );
};

export default Register;