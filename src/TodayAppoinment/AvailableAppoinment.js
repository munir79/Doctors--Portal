import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({selectedDate}) => {
    
    return (
        <div>
            <h4 className='text-center text-primary text-bold text-2xl'> You Have Selected Date:{format(selectedDate, 'PP')}  </h4>
        </div>
    );
};

export default AvailableAppoinment;
