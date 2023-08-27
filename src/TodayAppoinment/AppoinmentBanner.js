
import chair from '../AssetPic/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppoinmentBanner = ({selectedDate,setSelecetedDate}) => {

    return (
       <header className='my-6'>
<div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div className='mr-6'>
    <DayPicker 
    mode="single"
    selected={selectedDate}
    onSelect={setSelecetedDate}
    
    
    />

  
    </div>
  </div>
</div>

       </header>
    );
};

export default AppoinmentBanner;