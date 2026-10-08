'use client'
import moment from 'moment';
import React, { useEffect, useState } from 'react';


export default function Time  (){
    const [date,setDate]=useState('')
    useEffect(()=>{
    setDate(moment().locale('bn').format('LL'));
},[])

    return (
        <p>
            {date}
        </p>
    );
}

