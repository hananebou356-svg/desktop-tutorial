import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
        <div>
          <a href="#" className="text-light me-3">LinkedIn</a>
          <a href="#" className="text-light me-3">GitHub</a>
          <a href="#" className="text-light">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
