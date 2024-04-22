import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage:React.FC = () => {
    const navigator = useNavigate();

    const handleClick = () => {
        navigator("/monitor");
    }
    return(
        <>
        <button onClick={handleClick}>모니터링 시작</button>
        </>
    )
}

export default Homepage;