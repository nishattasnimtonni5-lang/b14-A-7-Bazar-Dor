'use client'



export default function Time  (){
   const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('bn-BD', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(today);
    return (
        <p>
            {formattedDate}
        </p>
    );
}

