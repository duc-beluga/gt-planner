import React, { useState } from "react";

const CoursesTaken = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const classes = [
    "CS 1301",
    "CS 1331",
    "CS 1332",
    "CS 2340",
    "CS 2110",
    "PHYS 2211",
    "PHYS 2212",
    "MATH 1554",
    "MATH 2551",
    "CHEM 1301",
    "ME 1670",
    "ENGL 1101",
    "ENGL 1102",
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectClass = (courseName) => {
    if (!selectedClasses.includes(courseName)) {
      setSelectedClasses([...selectedClasses, courseName]);
    }
  };

  const handleRemoveClass = (courseName) => {
    setSelectedClasses(selectedClasses.filter((c) => c !== courseName));
  };

  const handleSave = () => {
    // Add your save logic here
    console.log("Classes saved:", selectedClasses);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex mt-14 font-inter">
      {" "}
      <div className="w-1/2 ml-36">
        <h2 className="text-2xl font-medium my-5 ml-3">Courses Taken</h2>{" "}
        <div className="relative" onClick={toggleDropdown}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={toggleDropdown}
            placeholder="Search Courses"
            className="pl-5 pr-10 py-3 border rounded-lg w-96"
          />
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <i className="fas fa-search"></i>
          </div>
        </div>
        {dropdownVisible && (
          <div className="absolute mt-1 w-96 bg-white rounded-lg overflow-y-auto max-h-80">
            {" "}
            {classes
              .filter((courseName) =>
                courseName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((courseName, index) => (
                <div
                  key={index}
                  className="p-3 cursor-pointer rounded-lg my-1 bg-gray-100 hover:bg-gray-300"
                  onClick={() => handleSelectClass(courseName)}
                >
                  {courseName}
                </div>
              ))}
          </div>
        )}
        <button
          className="absolute bottom-16 right-24 bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors duration-300 hover:bg-gray-600 w-60"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="w-1/2 ml-6">
        <h2 className="font-medium my-8 ml-2">Your Classes</h2>{" "}
        <div className="bg-white w-96 h-96 overflow-y-auto">
          {" "}
          {selectedClasses.map((courseName, index) => (
            <div
              key={index}
              className="p-3 border border-gray-300 rounded-lg my-1 flex items-center justify-between"
            >
              {" "}
              <span>{courseName}</span>{" "}
              <button
                onClick={() => handleRemoveClass(courseName)}
                className="text-red-500 ml-auto"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesTaken;
