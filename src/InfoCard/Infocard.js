import React from 'react';

const Infocard = ({items}) => {
    const {name,icons,description,bgClass}=items;
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgClass} p-4`}>
        <figure><img src={icons} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default Infocard;