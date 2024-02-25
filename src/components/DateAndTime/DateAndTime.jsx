import React, { useState, useEffect } from 'react';

const DataAndTime = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
            const timeOptions = { hour: '2-digit', minute: '2-digit' };

            setCurrentDate(now.toLocaleDateString(undefined, dateOptions));
            setCurrentTime(now.toLocaleTimeString(undefined, timeOptions));
        };

        // Update date and time initially
        updateDateTime();

        // Update date and time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="fw-bold text-white text-center">{currentDate}</h1>
            <h1 className="fw-bold text-white text-center">{currentTime}</h1>
        </div>
    );
};

export default DataAndTime;
