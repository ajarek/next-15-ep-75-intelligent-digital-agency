import { SignIn } from '@/components/SignIn'
import React from 'react'

const Login = () => {
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] flex flex-col items-center justify-center bg-secondary p-4 gap-4 '>
      <h1>Login</h1>
      <SignIn />
    </div>
  )
}

export default Login