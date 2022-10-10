import React from 'react'
import Logo from './Logo'
import LoginForm from './LoginForm'

export default function ColumnRight() {
  return (
    <div className='column-right-form'>
        <div>
            <Logo />
        </div>
        <div>
            <LoginForm />
        </div>
    </div>
  )
}
