
import React from 'react';
import { faHouse, faPhone, faEnvelope,faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import resume from '../Assets/Cv Resume (2).pdf.pdf'
import coverletter from '../Assets/Coverletter (2).pdf.pdf'

export const Footer = () => {
  return (
    <div className='footer-portfolio'>
      <div className='links'>
        <div>
          <h5>
            <FontAwesomeIcon icon={faHouse} className="footer-icon" />
            Robbinsdale, Minnesota
          </h5>
          <h5>
            <FontAwesomeIcon icon={faPhone} className="footer-icon" />
            Available upon request
          </h5>
          <h5>
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
            N.nguyen3464@gmail.com
          </h5>
          <h5>
            <a href={resume} className="download-link">
              <FontAwesomeIcon icon={faCloudDownload} className="download-icon" />
              Download Resume
            </a>
          </h5>
          <h5>
            <a href={coverletter} className="download-link">
              <FontAwesomeIcon icon={faCloudDownload} className="download-icon" />
              Download Cover Letter
            </a>
          </h5>
        </div>
        <div className='links2'>
          <h3>©️ Created by Nguyen Nguyen</h3>
          <a href="https://github.com/Nguyen3464" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className='brand-icon'/>
          </a>
          <a href="https://www.linkedin.com/in/nguyen-nguyen3464/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className='brand-icon'/>
          </a>
          <a href="/" className="top-link">
            <FontAwesomeIcon
              icon={faAngleUp}
              bounce
              style={{ color: "#b7f64c" }}
              id="icon"
              className='angleup'
            />
          </a>
        </div>
      </div>
    </div>
  );
};