import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContex } from '../UserContext/AuthProvider';
import { toast } from 'react-hot-toast';

const OpenModal = ({ treatment, selectedDate, settreatment, refetch }) => {
  const { user } = useContext(AuthContex);
  const { name: treatmentName, slots } = treatment;
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      name, slot, email, phone, treatmentName
    }

    console.log(booking);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data.acknowledged) {
          settreatment(null)
          toast.success('booking succesfully')
          refetch();
        }
        else {
          toast.error(data.messege);
        }


      })




  }

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold"> {treatmentName} </h3>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6 mt-10' >
            <input type="text" name='date' placeholder="Type here" disabled value={format(selectedDate, 'PP')} className="input w-full input-borderedinput-bordered " />
            <select name='slot' className="select select-bordered w-full max-w-xs">

              {
                slots.map((slot, i) => <option value={slot}
                  key={i}

                >{slot}</option>)
              }
            </select>
            <input type="text" name='name' placeholder="Enter Your Name " defaultValue={user?.displayName} disabled required className="input w-full input-bordered" />
            <input type="email" name='email' placeholder="Enter your email " defaultValue={user?.email} disabled required className="input w-full input-bordered" />
            <input type="text" name='phone' placeholder="Enter your phone  " required className="input w-full input-bordered" /><br />
            <input className='w-full input-borderedmax-w-sm bg-white text-black' required type="submit" value="Submit" />




          </form>
        </div>
      </div>
    </>
  );
};

export default OpenModal;