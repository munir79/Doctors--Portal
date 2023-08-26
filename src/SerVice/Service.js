import React from 'react';


const Service = ({service}) => {
    const {name,img,description}=service;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description }</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      
      </div>
    );
};

export default Service;