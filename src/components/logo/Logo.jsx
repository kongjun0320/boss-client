import React from 'react'
import logo from './logo.png'
// import './logo.less'
import './logo.css'

export default function Logo(){
    return (
        <div className='container'>
            <img src={logo} alt="logo"/>
        </div>
    )
}

