import React from 'react';
import { personalData } from '../data/personalData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; {currentYear} {personalData.name}. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              {personalData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                >
                  <i className={`fab fa-${social.platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
