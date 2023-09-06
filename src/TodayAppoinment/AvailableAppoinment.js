import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from './AppoinmentOption';
import OpenModal from './OpenModal';

const AvailableAppoinment = ({selectedDate}) => {
    const [appointmentOption,setAppoinmentOption]=useState([]);
    const [treatment,settreatment]=useState(null);
    useEffect( ()=>{
        fetch('Service.json')
        .then(res=>res.json())
        .then(data=>setAppoinmentOption(data))
    },[])
    
    return (
        <section className='mt-16'>
             <h4 className='text-center text-info text-bold '> You Have Selected Date:{format(selectedDate, 'PP')}  </h4>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
                appointmentOption.map(data=><AppoinmentOption key={data.id} 
                    data={data} 
                    settreatment={settreatment}
                    ></AppoinmentOption>)
             }
            </div>
         
         {
            treatment &&
            <OpenModal treatment={treatment} 
            settreatment={settreatment}
            selectedDate={selectedDate}></OpenModal>
         }
        </section>
    );
};

export default AvailableAppoinment;
