import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Todayappinment = () => {
    const [selectedDate, setSelecetedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate}
                setSelecetedDate={setSelecetedDate} ></AppoinmentBanner>


            <AvailableAppoinment selectedDate={selectedDate}  ></AvailableAppoinment>
        </div>
    );
};

export default Todayappinment;