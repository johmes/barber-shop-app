import React from 'react';
import { Button } from './CTAButton.styled';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const CTAButton = ({ target, theme, text, label }) => {
    const whereTo = target ? target : ''
    return (
        <div>
            <Link to={whereTo}>
                <Button hierarchy={theme} aria-label={text}>
                    {text}
                </Button>
            </Link>
        </div>
    )
}

CTAButton.propTypes = {
    target: string.isRequired,
    text: string.isRequired,
}

export default CTAButton;