import React, { useEffect, useState } from 'react';

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
          <div className='container1'>
            <h1>Mushroom Logs</h1>
            <h3>
              Embark on a fascinating journey into the world of fungi with our exclusive Mushroom Log Workshop.
            </h3>
          </div>
          <div className={`container2 ${showMotionDiv ? 'activate-motion' : ''}`}>
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
      </div>
    </>
  )
}
