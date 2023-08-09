import React, { useEffect } from 'react'
import { useState } from 'react';
import './clock.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Title() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
        return () => { clearInterval(interval) }
    }, [])
    return (
        <div className='title'>
            <h1 className='titleContent'>Thời gian: {currentTime.toLocaleTimeString()}</h1>
            <h2 className='titleContent'>Ngày: {currentTime.toLocaleDateString()}</h2>
            <Calendar value={currentTime}></Calendar>
        </div>
    )
}

export default Title
