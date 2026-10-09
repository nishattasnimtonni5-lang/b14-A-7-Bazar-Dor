'use client';

import { useEffect, useState } from 'react';

export default function Time() {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const today = new Date();

        const dateString = new Intl.DateTimeFormat('bn-BD', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Dhaka',
        }).format(today);

        setFormattedDate(dateString);
    }, []);

    return <p>{formattedDate}</p>;
}