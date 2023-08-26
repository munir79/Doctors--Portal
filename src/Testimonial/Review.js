import React from 'react';
import quote from './icons/quote.svg';
import person1 from './images/people1.png';
import person2 from './images/people2.png';
import person3 from './images/people3.png';
import Info from './Info';

const Review = () => {
    const information=[
        {
            id:'1',
            Review:'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi',
            Name:'Alison',
            image:person1,
            LOcation:'California'

        },
        {
            id:'2',
            Review:'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi',
            Name:' Jessica',
            image:person2,
            LOcation:'Russia'

        },
        {
            id:'3',
            Review:'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi',
            Name:'Genifar ',
            image:person3,
            LOcation:'Germany'

        },
    ]
    return (
      <div className='mt-14 border-2 border-sky-400 p-4 rounded-3xl'>
  <div className='flex justify-between'>
          <div className='m-8'>
            <p   className='text-info text-bold text-2xl'> Testimonial </p>
            <h3  className='text-3xl'> What our patient Says</h3>
          </div>
          <div>
             <img className='w-20' src={quote} alt="" />
          </div>
        </div>
<div className='grid grid-cols-1 gap-0.5  md:grid-cols-2 lg:grid-cols-3'>
{
    information.map(info=><Info key={info.id } all={info} ></Info>)
}
</div>


      </div>
    );
};

export default Review;