import React from 'react';
import Banner from '../../../Banner';
import InfoCArds from '../../../InfoCard/InfoCArds';
import Services from '../../../SerVice/Services';
import MakeAppoinment from '../../../Appoinmrnt/MakeAppoinment';
import Review from '../../../Testimonial/Review';
import Contact from '../../../Contact/Contact';



const Home = () => {
    return (
        <div className='mx-4'>
        <Banner></Banner>
        <InfoCArds></InfoCArds>
        <Services></Services>
        <MakeAppoinment></MakeAppoinment>
        <Review></Review>
        <Contact></Contact>
        
                                                                                                                                                                                                                                                                                                               
        </div>
    );
};

export default Home; 