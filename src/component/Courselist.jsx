// CoursesList.js
import React from 'react';
import Course from './Courses';

const coursesData = [
  {
    title: 'Introduction to React',
    description: 'Learn the basics of React.js for web development.',
    image: '../images/c1.jpeg',
    price:'Rs.1000',
  },
  {
    title: 'Front-End Development',
    description: ' A complete insight on designing to UI/UX team.',
    image: '../images/c2.jpeg',
    price:'Rs.1500',
  },
  {
    title: 'Video Editing Course',
    description: 'Gives knowledge about structuring video footage.',
    image: '../images/c3.jpeg',
    price:'Rs.800',
  },
  {
    title: 'Mastering Adobe xd for beginners',
    description: 'A complete knowledge about Adobe for beginners',
    image: '../images/c4.jpg',
    price:'Rs.900',
  },
  {
    title: 'Photography crash courses',
    description: 'Teaches you the skill and art of lens in photography.',
    image: '../images/c5.jpg',
    price:'Rs.1000',
  },
  {
    title: 'Introduction to UI/UX',
    description: 'Best course to start with for front-end-developers',
    image: '../images/c5.avif',
    price:'Rs.1700'
  },
  // Add more course objects as needed
];

const Courseslist = () => {
  return (
    <div>
      <h1>Learn Through EduHash</h1>
    <div className="courses-list">
      {coursesData.map((course, index) => (
        <Course key={index} {...course} />
      ))}
    </div>
    </div>
  );
};

export default Courseslist;
