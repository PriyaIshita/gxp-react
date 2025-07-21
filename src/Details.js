// import { formToJSON } from 'axios';
// import React, { useState } from 'react'

// const Details = () => {
//     const [formData, setformData] =useState
//         ({
//           name: '',
//         });
//   const handleChange = (e) => {
//     if (!e || !e.target) return;
//     const { name, value } = e.target;
//     setformData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
        




//   return (
//     <div style={{ position: 'absolute', top:'229px',left: '42px',textAlign:'center',}}>
//         <h1>Click Here to show Record</h1>
//         <input type="text" name="name" value={formData.name} onChange={handleChange}  />

//     </div>

//   )
// }

// export default Details


import React, { useState } from 'react';

const Details = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);
  
  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleInputChange = (e) => {
    const value = capitalizeFirstLetter(e.target.value);
    setInputValue(value);
  };
  

  const handleAddOption = () => {
    if (inputValue && !dropdownOptions.includes(inputValue)) {
      setDropdownOptions([...dropdownOptions, inputValue]);
    }
    setInputValue(''); // clear input after adding
  };

  const handleDropdownChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
   <div style={{ position: 'absolute', top:'229px',left: '42px',textAlign:'center',}}>
      <h3>Bind Input to Dropdown (Dynamic)</h3>

      {/* 🔹 Input */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type and add"
      />
      <button onClick={handleAddOption} style={{ marginLeft: '10px' }}>
        Add to Dropdown
      </button>

      {/* 🔹 Dropdown */}
      <select
        value={inputValue}
        onChange={handleDropdownChange}
        style={{ display: 'block', marginTop: '15px' }}
      >
        <option value="">Select</option>
      
        {dropdownOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Details;
