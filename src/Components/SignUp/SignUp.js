import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import './SignUp.css'
import useSignIn from '../../Hooks/useSignIn';

const SignUp = () => {

  const { createUserWithEmailAndPassword } = useSignIn()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <div className='forms-parent-container'>
      <div className='forms-container rounded'>
        <h2 className='text-center fw-bold' style={{color: 'rgb(1, 136, 204)'}}>Sign-up</h2>
        <div>
          <form onSubmit={handleSignUp}>
          <label className='fw-bold fs-5' htmlFor="name">Name</label> <br />
          <input className='w-100 px-3 py-2 fw-bold' type="text" name='name' /> <br />
          <label className='fw-bold fs-5' htmlFor="email">Email</label> <br />
          <input onBlur={(e) => setEmail(e.target.value)} className='w-100 px-3 py-2 fw-bold' type="email" name='email' /> <br />
          <label className='fw-bold fs-5 mt-2' htmlFor="password">Password</label> <br />
          <input onBlur={(e) => setPassword(e.target.value)} className='w-100 px-3 py-2 fw-bold' type="password" name='password' />
          <label className='fw-bold fs-5 mt-2' htmlFor="confirmPassword">Confirm Password</label> <br />
          <input className='w-100 px-3 py-2 fw-bold' type="password" name='confirmPassword' />
          <input onClick={() => createUserWithEmailAndPassword(email, password)} className='w-100 fw-bold py-1 fs-5 mt-5' value={'Sign-up'} type="submit" style={{background: 'rgb(1, 136, 204)', color: 'white', borderStyle: 'hidden'}} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;