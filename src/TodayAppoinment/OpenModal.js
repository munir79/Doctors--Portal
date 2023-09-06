import { format } from 'date-fns';
import React from 'react';

const OpenModal = ({treatment,selectedDate,settreatment}) => {

  const handleSubmit=event=>{
  event.preventDefault();
  const form=event.target;
  
  const name=form.name.value;
  const date=form.date.value;
  const email=form.email.value;
  const phone=form.phone.value;
  const slot=form.slot.value;

  const booking={
    appointmentDate:date,
    name,slot,email,phone
  }

  console.log(booking);
  settreatment(null);


  }
  const {name,slots}=treatment;
    return (
     <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold"> {name} </h3>
    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6 mt-10' >
    <input type="text"  name='date' placeholder="Type here" disabled value={format(selectedDate, 'PP')} className="input w-full input-borderedinput-bordered " />
    <select name='slot' className="select select-bordered w-full max-w-xs">

 {
  slots.map((slot,index)=>  <option  value={slot}
  key={index}
  
  >{slot}</option>)
 }
</select>
    <input type="text"  name='name' placeholder="Enter Your Name " required className="input w-full input-bordered" />
    <input type="email" name='email' placeholder="Enter your email " required className="input w-full input-bordered" />
    <input type="text" name='phone' placeholder="Enter your phone  "  required className="input w-full input-bordered" /><br />
    <input className='w-full input-borderedmax-w-sm bg-white text-black' required type="submit" value="Submit" />




    </form>
  </div>
</div>
     </>
    );
};

export default OpenModal;