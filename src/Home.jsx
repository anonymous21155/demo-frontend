import React from 'react';
import { useNavigate, Link } from "react-router-dom";

function Home () {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/hello');
    }
    return (
        <button onClick={handleClick}>Press.</button>
    )
}

export default Home;