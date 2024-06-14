import React from 'react'
import './pricing.css'
import {Check} from 'phosphor-react'
import { useNavigate } from 'react-router';


import '../components/Navbar.css'; // Import CSS file for styling


const Navbar = () => {
  return (
    <nav className="mission">
      <div className="">
        {/* Logo or brand name */}
        Pricing
      </div>
      
    </nav>
  );
}



export const Pricing = () => {
    const history = useNavigate() 
  return (
    <div className='main-container2'>
        <div><Navbar/></div>
        <div className='mission-container2'>
        <div className='left2'>
            <div className='cardleft'>
                <div className='inside'>INSTANT<br/>
        <span style={{fontSize: "60px"}}>Free</span>
        <p style={{fontSize: "15px"}}>Instantly Book your parking from anywhere. Pay as You Park, pay on the basis of the daily rates.
Save big with discounted parking rates for new customers</p>
        <hr className="new5" />
        <ul>
            <li className='points'>Instantly Book your parking from anywhere. Pay as You Park, pay on the basis of the daily rates.</li>
            <li className='points'>Save big with discounted parking rates for new customers</li>
        </ul>
        <button onClick={() => history('/signup')} className='start-free'>Start Free</button>
        </div>
        
        </div>
           
        </div>
    <div className='right2'><div className='cardright'><div className='cardleft'>
                <div className='inside'>PRO<br/>
        <span style={{fontSize: "60px"}}>₹999</span>/Month
        <p style={{fontSize: "15px"}}>skdbcdcbdkcjbjb sdckjdsbcdjsbcd sdkjcbsdcjb</p>
        <hr className="new5" />
        <ul>
            <li className='points'>Instantly Book your parking from anywhere. Pay as You Park, pay on the basis of the daily rates.</li>
            <li className='points'>Save big with discounted parking rates for new customers</li>
            <li className='points'>Guaranteed parking access reduces search time and stress</li>
            <li className='points'>Subscribers get preferred spots, ensuring availability during peak demand</li>
        </ul>
        <button onClick={() => history('/signup')} className='start-free1'>Start Free</button>
        </div>
        
        </div>
        </div>
        </div>
    
    </div>
    
    </div>
  )
}

