import React, { useEffect, useState } from 'react'

export default function ListItem(props) {
    const [ isChecked, setChecked ] = useState(false);
    const { onClick, data, checked } = props;
    
    useEffect(() => {
        setChecked(checked);
    }, [checked, setChecked]);

    return (
        <button 
            type="button"
            className='BookingListItem' 
            value={'shave'}
            onClick={onClick}
        >
            <div className='BookingListItemHeader'>
                {data.header}
            </div>
            <div className='BookingListItemDescription'>
                {data.description}
            </div>
            <div className='BookingListItemMarker'>
                <span 
                    checked={isChecked} 
                    role='radio' 
                    aria-checked='false' 
                    aria-labelledby="chk15-label"
                />
            </div>
        </button>

    )
}
