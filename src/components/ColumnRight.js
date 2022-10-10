import React from 'react'
import logo from '../img/logomd.svg'
import LoginForm from './LoginForm'

export default function ColumnRight() {
  return (
    <div className='column-right-form'>
        <div>
            <img src={logo} alt="logo MD" />
        </div>
        <div>
            <LoginForm />
        </div>
    </div>
  )
}
