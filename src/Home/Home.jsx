import React, { useRef } from 'react'
import CTAButton from "../components/Button/CTAButton";
import background from '../barbershop_background_800x740.png';

function Home({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);

    return (
        <div>
            <div id="home" className={"Content-area landing-area " + theme}>

                <div className='Inner'>

                    <div className='Inner Left'>
                        <h1 ref={titleRef}>Barber Shop in Turku</h1>
                        <p>
                            Coffee Barber is a chill and comfy barber shop
                            where you can enjoy a cup of freshly grounded
                            coffee while you are waiting for your cut.
                        </p>
                        <div className="ButtonContainer">
                            <CTAButton
                                target="booking"
                                theme="primary"
                                text="Book now"
                            />
                            <CTAButton
                                target="about"
                                theme="secondary"
                                text="Learn more"
                            />
                        </div>
                    </div>

                    <div className='Inner Right'>
                        <img 
                            src={background} 
                            alt="Razor blades and brush" 
                            className='LandingPageImage'
                        />
                    </div>

                </div>
                <div className="Content-area">
                    <div className='Inner'>
                        <h2>Our Story</h2>
                        <p>
                            Here in Coffee Barber we love coffee and haircuts. 
                            The idea of our company started back in 2021 when 
                            our founder John Doe had a vision to put together 
                            two things he was most ambitious of.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home