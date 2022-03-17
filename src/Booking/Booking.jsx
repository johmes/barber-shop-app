// Booking.jsx
import React, { useRef, useState } from 'react';
import Calendar from '../components/Calendar';
import { Button } from '../components/Button/CTAButton.styled';
import { Link } from "react-router-dom";
import ListItem from './ListItem';

export default function Booking({ lightTheme }) {
    const theme = lightTheme ? "light" : "dark";
    const titleRef = useRef(null);
    const [serviceValue, setServiceValue] = useState('default');

    const handleClick = (e, data) => {
        setServiceValue(data);
    };

    const services = [
        {
            'header': 'Beard Shave',
            'description': 'Shave with a razor blade and cream.',
            'id': 'shave',
        },
        {
            'header': 'Womens Hair Cut',
            'description': 'Long hair cut.',
            'id': 'longHairCut',
        },
        {
            'header': 'Beard Shave',
            'description': 'Shave with a razor blade and cream.',
            'id': 'shave',
        },
        {
            'header': 'Beard Shave',
            'description': 'Shave with a razor blade and cream.',
            'id': 'shave',
        },
        {
            'header': 'Beard Shave',
            'description': 'Shave with a razor blade and cream.',
            'id': 'shave',
        },
    ]

    return (
        <div id="booking" className={"Content-area " + theme}>
            <div className='Inner'>

                <h1 ref={titleRef}>Booking</h1>

                <form className='FormContainer'>
                    <p className="StepHeader">1/3 Select Service</p>
                    <p>{serviceValue}</p>

                    <div className='BookingList'>
                        {services.map((item, i) => (
                            <ListItem
                                data={item}
                                checked={serviceValue === item.id}
                                key={i}
                                onClick={(e) => handleClick(e, item.id)}
                            />
                        ))}
                    </div>

                    <div className='StepLine' />

                    <p className="StepHeader">2/3 Select Time</p>
                    <Calendar />

                    <div className='StepLine' />

                    <p className="StepHeader">3/3 Information</p>
                    <div className="FormGroup">
                        <InputBox 
                            type='text' 
                            placeholder='John Doe' 
                        />
                        <InputBox
                            type='text' 
                            placeholder='+358441234567' 
                        />
                        <InputBox 
                            type='email' 
                            placeholder='john.doe@email.com' 
                        />
                    </div>

                    <input type="checkbox" />
                    <span className='CheckboxText'>
                        I agree to
                        <Link to="/termsofservice">
                            Terms of Service
                        </Link> and
                        <Link to="/privacypolicy">
                            Privacy Policy
                        </Link>
                    </span>

                    <div className='SubmitButtonContainer'>
                        <Button type="submit" hierarchy="primary">
                            Confirm
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

const InputBox = ({...props}) => {
    return(
        <input
            className='InputBox'
            {...props}
        /> 
    );
}