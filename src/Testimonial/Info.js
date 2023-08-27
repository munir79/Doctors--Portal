import React from 'react';

const Info = ({all}) => {
    console.log(all);
    const {Name,Review,image, LOcation}=all;
    return (
       <section className='h-110'>
        <div className="card w-98 bg-neutral text-neutral-content h-60 rounded-3xl">
  <div className="card-body items-center text-center">
 
    <p> {Review}</p>
   <div>
   <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} alt=''/>
  </div>
<div>
<h3 className='text-2xl p-2 m-3'  >{Name}</h3>
  <p> {LOcation} </p>
</div>
</div>
   </div>

    <div >
    
    </div>
  </div>
</div>
       </section>
    );
};

export default Info;