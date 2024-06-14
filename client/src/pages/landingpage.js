import React from 'react'
import './landingpage.css'
import { Mission } from './mission'
import { Pricing } from './pricing'
import { useNavigate } from 'react-router'


export const Landingpage = () => {
    const history = useNavigate()
  return (
    <div>
    <div className='landing-container'>
        <div className='text'>Leave Parking to Us<br/>Because life's too short to circle blocks</div>
    <div className='arrow-container'><img className='arrow' src={'https://cdn-icons-png.flaticon.com/512/2931/2931528.png'} /></div>
    <div><button onClick={() => history('/signup')} className='start-free'>Start Free</button></div>
    </div>
    <Mission/>
    <Pricing />
    </div>
    
  )
}
