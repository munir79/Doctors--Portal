import React from 'react';
import cavity from './Image/images/cavity.png';
import fliud from './Image/images/fluoride.png';
import teeth from './Image/images/whitening.png';
import Service from './Service';
import Eeception from '../Exception/Eeception';

const Services = () => {

    const ServiceItem=[
        {
            id:1,
            name:'Floride Treatment',
            description:'Fluoride is a natural mineral that builds strong teeth and prevents cavities.  ',
            img:fliud
        },
        {
            id:2,
            name:'Cavity Feeling ',
            description:'Fluoride is a natural mineral that builds strong teeth and prevents cavities.  ',
            img:cavity
        },
        {
            id:3,
            name:'Teeth Whiteing ',
            description:'Fluoride is a natural mineral that builds strong teeth and prevents cavities. ',
            img:teeth
        },
    ]
    return (
        <div className='mt-3 ' >
          <div className='text-center'>
          <h3 className=' text-xl font-bold text-primary uppercase'> Our Services </h3>
            <h2> Service we Provided </h2>

       <div>
       <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
         {
                ServiceItem.map(service=><Service 
                key={service.id }
                service={service }
                
                ></Service>)
            }
         </div>
         <Eeception></Eeception>
       </div>
          </div>
        </div>
    );
};

export default Services;