import React from 'react';

const AppoinmentOption = ({data,settreatment}) => {
    const {name,slots}=data;
    return (
        <div className="card w-96 shadow-xl">
        <div className="card-body text-center mt-10 ">
          <h2 className="card-title text-info ">{name} </h2>
          <p className='text-center'> { slots.length> 0 ?slots[0] :'try another day' } </p>
          <p> {slots.length} {slots.length >1 ? 'spaces':'space' } available </p>
          <div className="card-actions justify-end">
        
         
          <label htmlFor="my-modal-3" className="btn  text-info  "  
          
          onClick={()=>settreatment(data)}
          
          >Book appoinment 
          
          
          </label>
       
          </div>
        </div>
      </div>
    );
};

export default AppoinmentOption;