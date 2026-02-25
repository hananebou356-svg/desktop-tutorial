import React, { useState, useEffect } from 'react';
import profileImage from '../assets/profile.avif';
import { fetchAbout } from '../utils/api';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const data = await fetchAbout();
        setAboutData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadAbout();
  }, []);

  if (loading) return <div className="text-center py-5">Loading about...</div>;
  if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={profileImage} alt="About" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">About Me</h2>
            <p>{aboutData.description1}</p>
            <p>{aboutData.description2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
