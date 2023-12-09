import React from 'react';
import RButton from '../images/register-button.svg'

const Register = () => {
  return (
    <div>
        <div className='register-button'>
            <div className='container'>
                <img src={RButton} alt="register" />
                <div>Register</div>
            </div>
        </div>
    </div>
  );
};

export default Register;