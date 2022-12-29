import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {

    const [visibleButton, setVisibleButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200){
                setVisibleButton(true);
            }else{
                setVisibleButton(false);
            }
        })
    }, [])


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            
        {visibleButton && (
            
            <button className='back-to-top f-16-popins' onClick={scrollToTop}>
                BACK TO <br /> TOP
            </button>
        )}
            
        </>
    )
}

export default BackToTop;