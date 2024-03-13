// Course.js
import React from 'react';
import { Link } from 'react-router-dom';
const Course = ({ title, description, image,price}) => {
  return (
  
    <div className="course">
      <img src={image} alt={title} /><br/>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p class="button"><Link to="/enroll">Enroll Now</Link></p>
    </div>

  );
};

export default Course;
