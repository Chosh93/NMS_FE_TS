import React, { useState, useEffect } from "react";

const Seconds:React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds +1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
        <div>
            <p>time : {seconds} seconds</p>
        </div>
    )
}

export default Seconds;