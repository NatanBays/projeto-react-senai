import React from "react";
import './localization.css'
import { iframe } from "react";

function Localization() {

    const iframe ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14150.40865130906!2d-48.499238670568936!3d-27.543816368360755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527475e01a8efef%3A0x5b0f13adab8483ec!2sSENAI%20Florian%C3%B3polis%20(CTAI)!5e0!3m2!1spt-BR!2sbr!4v1688676988295!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    return (
        <div>
            <h1 className='localization-title'>Localização</h1>
            <div className="maps">            
            <img src="https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-1-1-1429x2048.png"></img>
            <a href = "https://goo.gl/maps/uX7C5g6DwMYGoS7HA">Link</a>
            </div>
        
        </div>
        
    );
    
}
export default Localization