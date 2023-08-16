import React from 'react';
import clock from './icons/clock.svg'
import marker  from './icons/marker.svg'
import phone from './icons/phone.svg'
import Infocard from './Infocard';



const InfoCArds = () => {
    const cardItems=[
        {
            id:1,
            name:'Opening Hours',
            description:'9.00 am to 6.00 pm everyday',
          icons:clock,
          bgClass:'bg-primary'
        },
        {
            id:2,
            name:'Our Location ',
            description:'9.00 am to 6.00 pm everyday',
            icons:marker,
            bgClass:'bg-accent'
         
        },
        {
            id:3,
            name:'contacts Us ',
            description:'9.00 am to 6.00 pm everyday',
            icons:phone,
            bgClass:'bg-primary'
          
        },
    ]

    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-4 gap-4 '>
        {
            cardItems.map(items=><Infocard  
            key={items.id}
            items={items}
            
            ></Infocard>)
        }
        </div>
    );
};

export default InfoCArds;
