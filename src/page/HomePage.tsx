import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Homepage:React.FC = () => {
    const navigator = useNavigate();

    const handleClick = () => {
        navigator("/monitor");
    }
    return(
        <div className="mainHome-div">
            <button onClick={handleClick}>모니터링 시작</button>
        </div>
    )
}

export default Homepage;