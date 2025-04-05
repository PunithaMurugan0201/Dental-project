import React, { useState, useEffect } from "react";
import "./Home.css"; // Custom styles
import NotificationBox from "./NotificationBox";
import image1 from '../assets/images/image1.png';
import teethImage from '../assets/images/teeth.jpg';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, teethImage];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="container">
      <section className="main-content">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="image"
          />
        </div>

        <h2>About the Department</h2>
        <div className="scrolling-box">
          <ul>
            <li>Welcome to the Orthodontics Department, where we specialize in creating healthy, aligned smiles.</li>
            <li>Our team provides expert care using advanced techniques like braces and aligners.</li>
            <li>We offer comprehensive resources for students, faculty, and patients alike.</li>
            <li>Whether you're learning, researching, or seeking treatment, we're dedicated to delivering the best in orthodontic care.</li>
            <li>Transform your smile with us today!</li>
          </ul>
        </div>
      </section>
      <NotificationBox />
    </div>
  );
};

export default Home;
