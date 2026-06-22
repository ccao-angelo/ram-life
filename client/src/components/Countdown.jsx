// src/components/Countdown.jsx
import { useState, useEffect } from 'react';

export default function Countdown ({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference >0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (Object.keys(timeLeft).length === 0) {
        return null;
    }
    return (
        <div style={{
            display: 'inline-block',
            backgroundColor: '#E8F0FE',
            color: '#003DA5',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginTop: '0.5rem',
            fontFamily: 'monospace',
        }}>
            ⏳ Starts in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
    );
}