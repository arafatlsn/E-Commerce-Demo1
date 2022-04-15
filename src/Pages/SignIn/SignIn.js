import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignIn from '../../Hooks/useSignIn';
import './SignIn.css'
import  { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signInWithGoogle, signInWithFacebook, signInWithEmailAndPassword, userSignInWithPass } = useSignIn();

  console.log(userSignInWithPass)
  const handleSingIn = (e) => {
    e.preventDefault()
  }
  return (
    <div className='forms-parent-container'>
      <div className='forms-container rounded'>
        <h2 className='text-center fw-bold' style={{color: 'rgb(1, 136, 204)'}}>Sign-in</h2>
        <div>
          <form onSubmit={handleSingIn}>
          <label className='fw-bold fs-5' htmlFor="email">Email</label> <br />
          <input onBlur={(e) => setEmail(e.target.value)} className='w-100 px-3 py-2 fw-bold' type="email" name='email' /> <br />
          <label className='fw-bold fs-5 mt-2' htmlFor="password">Password</label> <br />
          <input onBlur={(e) => setPassword(e.target.value)} className='w-100 px-3 py-2 fw-bold' type="password" name='password' />
          <input onClick={() => signInWithEmailAndPassword(email, password)} className='w-100 fw-bold py-1 fs-5 mt-5' value={'Sign-in'} type="submit" style={{background: 'rgb(1, 136, 204)', color: 'white', borderStyle: 'hidden'}} />
          </form>
          <div className='mt-2 d-flex justify-content-center'>
            <p className='m-0 fw-bold text-decoration-underline' style={{color: 'rgb(1, 136, 204)'}}>Sign-in with</p>
          </div>
            <div className='row row-cols-2 px-3'>
              <button onClick={() => signInWithFacebook()} className='border py-1 d-flex justify-content-center align-items-center fs-5 fw-bold' style={{borderStyle: 'hidden', background: "#1771E6", color: 'white'}}><BsFacebook className='me-1'/> Facebook</button>
              <button onClick={() => signInWithGoogle()} className='border py-1 d-flex justify-content-center align-items-center fs-5 fw-bold' style={{borderStyle: 'hidden', background: '#F2F2F2'}}><FcGoogle className='me-1'/>Google</button>
            </div>
          <Link to={'/signup'}>
            <p className='fw-bold text-center text-decoration-underline' style={{color: 'rgb(1, 136, 204)', cursor: 'pointer'}}>Create an Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;