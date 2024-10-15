import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../Utils/Validate.jsx';

const Login = () => {
  const [isSigninForm, setisSigninForm] = useState(true);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSigninForm = () => {
    setisSigninForm(!isSigninForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validate email and password using checkValidateData
    const validationMessage = checkValidateData(email, password);
    if (validationMessage !== "Data is valid") {
      setErrorMessage(validationMessage); // Show error if validation fails
    } else {
      setErrorMessage(''); // Clear error if validation passes
      console.log("Form submitted successfully");
      console.log(email, password)
    }
  };

  return (
    <div className='relative h-screen'>
      {/* Header */}
      <div className='relative z-10'>
        <Header />
      </div>

      {/* Background image */}
      <div className='absolute inset-0'>
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          className='w-full h-full object-cover'
          alt='Background'
        />
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-60'></div>

      {/* Centered form */}
      <div className='absolute inset-0 flex justify-center items-center z-20'>
        <form onSubmit={handleFormSubmit} className='bg-black p-8 rounded shadow-lg opacity-80 text-white'>
          <h1 className='mb-2 font-semibold'>
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSigninForm && (
            <input 
              ref={nameRef}
              type='text' 
              placeholder='Name' 
              className='w-full p-2 mb-4 border rounded bg-slate-600 opacity-60'
            />
          )}

          <input 
            ref={emailRef}
            type='email' 
            placeholder='Email Address' 
            className='w-full p-2 mb-4 border rounded bg-slate-600 opacity-60'
          />
          <input 
            ref={passwordRef}
            type='password' 
            placeholder='Password' 
            className='w-full p-2 mb-4 border rounded bg-slate-600 opacity-60'
          />

          {/* Display error message if validation fails */}
          {errorMessage && <p className='text-red-500 mb-4'>{errorMessage}</p>}

          <button type='submit' className='w-full p-2 mt-7 bg-red-600 text-white rounded'>
            {isSigninForm ? "Login" : "Sign Up"}
          </button>

          <div className='flex mt-5'>
            <h2 className='mr-5'>
              {isSigninForm ? "New to Netflix?" : "Already have an account?"}
            </h2>
            <button 
              type='button'
              className='text-red-500 underline' 
              onClick={toggleSigninForm}
            >
              {isSigninForm ? "Sign up now" : "Sign in now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
