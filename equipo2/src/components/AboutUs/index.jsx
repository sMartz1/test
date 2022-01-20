
import './component.css';
import React from 'react'


export default function AboutUs() {

    const mapSrc = "https://maps.google.com/maps?q=40.421779006268075,-3.6926647309547094&t=&z=17&ie=UTF8&iwloc=&output=embed";

    return (
        <div className='AboutUs'>
            <div className='AboutUsInfo'>
                <p>
                    Company dedicated to smuggling luxury goods of dubious 
                    origin since the Covic pandemic.
                </p>
                <a href="tel:+34000000000">Call us without obligation</a> 
                <p>
                    You can find us if you have no debts or complaints at:
                </p>
            </div>
            <div className="gmap_canvas">
                <iframe title='gmap' 
                    width="600" 
                    height="500" 
                    id="gmap_canvas" 
                    src={mapSrc}
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0">
                </iframe>
            </div>
        </div>
    )
}

