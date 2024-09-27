// Import necessary libraries
import React from 'react';
import './Clientsidecss/Calander.css';

// Define the component
const MyComponent = () => {
  // Define the weekdays array
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const currday = currentDate.getDate();


  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month_key =["January","Febuary","March","April","May","June","July","Augest","September","October","November","December"]
  const dayName = weekDays[currday];
  const W_month =month_key[month]

  const generateDailyTimes = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute++) {
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Handle 12-hour format
        const amPm = hour < 12 ? 'am' : 'pm'; // Set am/pm
        const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`; // Add leading zero to minutes
  
        if (formattedMinute === '00') {
          // Push only full hours (e.g., '1:00am', '2:00pm')
          
          times.push(`${formattedHour}:${formattedMinute}${amPm}`);
        } else {
          // Push empty values for non-hour times
          times.push(null); // or `{}` or another placeholder
        }
      }
    
    }
    
    return times;
  };

  const getCurrentWeek = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); 
    
    const week = []; 

    
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDay); 

    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek); 
        date.setDate(startOfWeek.getDate() + i);
        week.push(date.getDate()); 
    }

    return week;
};

// Example usage
const week = getCurrentWeek();



  const hours = generateDailyTimes(); 
  return (
    <div className="my-component">
      <div className='top_flexbox'>
        <button>Back</button>
        <h2>Month:{W_month}</h2>
        <h2>Year:{year}</h2>
        <button>Next</button> 
      </div>
      {/* Grid container */}
      <div className="grid_container">
        {/* First row (weekdays) */}
        {weekDays.map((day, index) => (
          <div className="firstrow" key={index} style={{ gridColumn: `${index + 3}` }}>
            {day}{week[index]}
          </div>
        ))}

        {/* First column (hours) */}
        {hours.map((time, index) => {
  console.log("Time value:", time);  // This will log the value of `time` to the browser console
  
  return (
    <div className="firstcol" key={index} style={{ gridRow: `${index + 3}` }}>
      {time}
    </div>
  );
})}
      </div>
    </div>
  );
};

export default MyComponent;
