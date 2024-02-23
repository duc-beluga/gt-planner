import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'daisyui/dist/full.css'; // Import DaisyUI
import './CoursesTaken.css'; // Keep your custom CSS if necessary

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
    'ME 1670',
    'ENGL 1101',
    'ENGL 1102'
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
    <div className="courses-taken-container flex mt-14 inter-font"> {/* Added inter-font class */}
      <div className="right-half w-1/2 ml-36">
        <h2 className="courses-taken-title text-2xl font-medium my-5 ml-3 inter-font">Courses Taken</h2> {/* Added inter-font class */}
        <div className="search-bar relative" onClick={toggleDropdown}>
          {/* Click handler added to toggle dropdown */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={toggleDropdown}
            placeholder="Search Courses"
            className="search-input pl-5 pr-10 py-3 border rounded-lg w-96 inter-font" // Updated width to w-96
          />
          <div className="search-icon absolute top-1/2 right-4 transform -translate-y-1/2">
            <i className="fas fa-search"></i>
          </div>
        </div>
        {/* Conditionally render dropdown based on state */}
        {dropdownVisible && (
          <div className="dropdown absolute mt-1 w-96 bg-white rounded-lg overflow-y-auto max-h-80 inter-font"> {/* Updated width to w-96 and max-h-80 */}
            {classes
              .filter((className) =>
                className.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((className, index) => (
                <div
                  key={index}
                  className="dropdown-item p-3 cursor-pointer rounded-lg my-1 bg-gray-100 hover:bg-gray-300 inter-font" // Added inter-font class
                  onClick={() => handleSelectClass(className)}
                >
                  {className}
                </div>
              ))}
          </div>
        )}
        <button className="save-button absolute bottom-16 right-24 bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors duration-300 hover:bg-gray-600 w-60 inter-font" onClick={handleSave}>
          Save
        </button>
        {/* Save button added */}
      </div>
      <div className="left-half w-1/2 ml-6">
        <h2 className="title-selected-classes text-m font-meduim my-8 ml-2 inter-font">Your Classes</h2> {/* Added inter-font class */}
        <div className="selected-classes bg-white w-96 h-96 overflow-y-auto inter-font"> {/* Updated height to h-96 for a slightly longer container, added overflow-y-auto */}
          {selectedClasses.map((className, index) => (
            <div key={index} className="selected-class p-3 border border-gray-300 rounded-lg my-1 flex items-center justify-between inter-font"> {/* Added inter-font class */}
              <span>{className}</span>{' '}
              <button onClick={() => handleRemoveClass(className)} className="text-red-500 ml-auto">x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesTaken;
