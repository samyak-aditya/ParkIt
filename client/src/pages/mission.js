import React from 'react'
import './mission.css'


import '../components/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="mission">
      <div className="">
        {/* Logo or brand name */}
        Our Mission
      </div>
      
    </nav>
  );
}



export const Mission = () => {
  return (
    <div className='main-container1'>
        <div><Navbar/></div>
        <div className='mission-container'>
        <div className='left1'>We are the best when it comes
to Valets and we make sure you never struggle with parking, Ever!
           
        </div>
    <div className='right1'>Picture this: You're the knight of the asphalt jungle, navigating through the concrete chaos, and every parking spot seems to have vanished into thin air. But hold onto your steering wheel, because at ParkIt, you're the superhero of the valet realm! Let's show the world how valet magic is done!</div>
    
    </div>
    
    </div>
  )
}
