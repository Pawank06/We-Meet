import React, { useState, useEffect } from "react";

function DateTime() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    // Function to format the date and time in the desired format
    const getFormattedDateTime = (date) => {
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const time = new Intl.DateTimeFormat('en-US', options).format(date);
  
      const optionsDate = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      };
      const dateFormatted = new Intl.DateTimeFormat('en-US', optionsDate).format(date);
  
      return `${time} | ${dateFormatted}`;
    };
  return (
    <div>
      {/* Display the formatted current date and time */}
      <p>{getFormattedDateTime(currentDateTime)}</p>
    </div>
  );
}

export default DateTime;
