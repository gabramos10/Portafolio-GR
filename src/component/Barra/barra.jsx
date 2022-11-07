import React from 'react';
import "./barra.css"

const Barra = ({isScrolling}) => {
    const toTop = () => {
        window.scrollTo({ top: 0 , left: 0, behavior: "smooth"})
    }


    return (
        <nav className= {`navBarra ${isScrolling > 20 ? "scrolling" : null} `}>
            <div className='navBarra-logo' onClick={toTop}>
            Tu Nombre
            </div>

        </nav>
    );
}

export default Barra;
