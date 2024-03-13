
import React, { useState } from 'react';
const courses = [
  { id: 1,
   name: 'Introduction to React', 
   price: 49.99
 },
  { 
    id: 2,
    name: 'Advanced React Concepts', 
    price: 79.99 
},
  { 
    id: 3,
    name: 'React for Web Development', 
    price: 59.99 
},
];

const Enroll= () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    selectedCourses: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCourseSelection = (courseId) => {
    const isCourseSelected = formData.selectedCourses.includes(courseId);

    if (isCourseSelected) {
      setFormData({
        ...formData,
        selectedCourses: formData.selectedCourses.filter((id) => id !== courseId),
      });
    } else {
      setFormData({
        ...formData,
        selectedCourses: [...formData.selectedCourses, courseId],
      });
    }
  };

  const handleRegistration = () => {
    console.log('Registration Data:', formData);
  };

  return (
    <div className="enroll-page">
      <h1>Course Enrollment</h1>
      <form>
        <label>
          Username<br/>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label><br/>
        <label>
          Email<br/>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label><br/>
        <label>
          Phone Number<br/>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label><br/>
      </form>
      <div className="course-list">
        <h2>Available Courses</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <input
                type="checkbox"
                id={`course-${course.id}`}
                checked={formData.selectedCourses.includes(course.id)}
                onChange={() => handleCourseSelection(course.id)}
              />
              <label htmlFor={`course-${course.id}`}>
                {course.name} - ${course.price}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Enroll;
