import React, { useState } from 'react';
import './CoursesTaken.css';

const CoursesTaken = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const classes = [
    'CS 1301',
    'CS 1331',
    'CS 1332',
    'CS 2340',
    'CS 2110',
    'PHYS 2211',
    'PHYS 2212',
    'MATH 1554',
    'MATH 2551',
    'CHEM 1301',
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectClass = (className) => {
    if (!selectedClasses.includes(className)) {
      setSelectedClasses([...selectedClasses, className]);
    }
    setSelectedClass(className);
  };

  const handleRemoveClass = (className) => {
    setSelectedClasses(selectedClasses.filter((c) => c !== className));
  };

  const handleSave = () => {
    // Add your save logic here
    console.log('Classes saved:', selectedClasses);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  return (
    <div className="courses-taken-container">
      <div className="right-half">
        <h2 className="courses-taken-title">Courses Taken</h2>
        <div className="search-bar" onClick={toggleDropdown}>
          {/* Click handler added to toggle dropdown */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={toggleDropdown}
            placeholder="Search Courses"
          />
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
        {/* Conditionally render dropdown based on state */}
        {dropdownVisible && (
          <div className="dropdown">
            {classes
              .filter((className) =>
                className.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((className, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleSelectClass(className)}
                >
                  {className}
                </div>
              ))}
          </div>
        )}
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        {/* Save button added */}
      </div>
      <div className="left-half">
        <h2 className="title-selected-classes">Your Classes</h2>
        <div className="selected-classes">
          <ul>
            {selectedClasses.map((className, index) => (
              <li key={index}>
                {className}{' '}
                <button onClick={() => handleRemoveClass(className)}>x</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursesTaken;
