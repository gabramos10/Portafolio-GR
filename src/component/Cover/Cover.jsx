import React from 'react';
import "./Cover.css"
import CoverVideo from "../../medios/CoverVideo.mp4"

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={CoverVideo} autoPlay loop muted />
            <h1>Gabriel Ramos</h1>
            <p>Desarrollador FRONT-END</p>
            
        </div>
    );
}

export default Cover;
