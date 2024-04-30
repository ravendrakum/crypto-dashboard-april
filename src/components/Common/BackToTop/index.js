import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './styles.css'

const BackToTop = () => {
    // Get the button
    let mybutton = document.getElementsByClassName("myBt");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            mybutton.style.display = "flex";
        } 
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className='back-to-top-back' id='myBtn' onClick={() => topFunction()}>
            <ArrowUpwardRoundedIcon className='Arrow-btn' />
        </div>
    )
}

export default BackToTop