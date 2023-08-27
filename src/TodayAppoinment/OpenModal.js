import { format } from 'date-fns';
import React from 'react';

const OpenModal = ({treatment,selectedDate}) => {
  const {name,slots}=treatment;
    return (
     <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold"> {name} </h3>
    <form className='grid grid-cols-1 gap-6 mt-10' >
    <input type="text" placeholder="Type here" disabled value={format(selectedDate, 'PP')} className="input w-full input-borderedinput-bordered " />
    <select className="select select-bordered w-full max-w-xs">

 {
  slots.map(slot=>  <option  value={slot}>{slot}</option>)
 }
</select>
    <input type="text" placeholder="Type here" className="input w-full input-bordered" />
    <input type="text" placeholder="Type here" className="input w-full input-bordered" /><br />
    <input className='w-full input-borderedmax-w-sm bg-white text-black' type="submit" value="Submit" />




    </form>
  </div>
</div>
     </>
    );
};

export default OpenModal;