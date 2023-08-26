import React from 'react';
import doctors from './images/doctor.png';
import appoiinemt from './images/appointment.png';

const MakeAppoinment = () => {
    return (
       <section  className='mt-16'
       style={
        {
            background:`url(${appoiinemt})`
        }
       }>
         <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctors} className="max-w-sm  -mt-32 lg:w-1/2 rounded-lg shadow-2xl" alt='' />
          <div>
            <h4 className='  text-white text-lg  hidden lg:block font-bold'> Appoinment </h4>
            <h1 className="text-5xl text-white font-bold">Make an appoinment Today  </h1>
            <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
       </section>
    );
};

export default MakeAppoinment;