import React, { useEffect, useState } from 'react';
import logo from '../Assets/logo.jpeg'

export const Projects = () => {
  const [showMotionDiv, setShowMotionDiv] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMotionDiv(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div>
        <div className='projects-section1'>
          <div className='projects-section1-container1'>
            <h1>Mushroom Logs</h1>
            <h3>
              Embark on a fascinating journey into the world of fungi with our exclusive Mushroom Log Workshop.
            </h3>
          </div>
          <div className={`projects-section1-container2 ${showMotionDiv ? 'activate-motion' : ''}`}>
            <div className='sub-container1'>
              <h5>Hands-On Experience</h5>
              <p>Roll up your sleeves and dive into the enchanting world of mushroom cultivation. Our expert facilitators will provide step-by-step guidance, ensuring you leave with the skills to grow your own mushrooms at home.</p>
            </div>
            <div className='sub-container2'>
              <h5>Interactive Learning</h5>
              <p>Engage in lively discussions about the different types of mushrooms, the environmental benefits of cultivation, and the sustainable practices involved.</p>
            </div>
            <div className='sub-container3'>
              <h5>Take Home Your Creation</h5>
              <p>Take home your inoculated mushroom log, ready to sprout a bountiful harvest of delectable mushrooms in the comfort of your own space</p>
            </div>  
          </div>
        </div>
        <div className='projects-section1-container3'>
        <img src={logo} alt="logo" className="logo1" />
            <h1>What to Expect</h1>
            <h4>Unlock the secrets of cultivating your own gourmet mushrooms at our hands-on workshop. Learn the art and science of mushroom cultivation as we guide you through the process of inoculating logs with spores. Whether you're a gardening enthusiast, a nature lover, or just curious about the mysteries of mycology, this workshop is designed for all levels of experience.</h4>
          </div>
        <div className='projects-section1-container4'>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}
