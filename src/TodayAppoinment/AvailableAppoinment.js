import { format } from 'date-fns';
import React, { useState } from 'react';
import AppoinmentOption from './AppoinmentOption';
import OpenModal from './OpenModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppoinment = ({ selectedDate }) => {
    // const [appointmentOption,setAppoinmentOption]=useState([]);
    const [treatment, settreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: [' appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinment?date=${date}`);
            const data = await res.json();
            return data;
        }

    });
    if (isLoading) {
        return <Loading></Loading>
    }


    // useEffect( ()=>{
    //     fetch('http://localhost:5000/appoinment')
    //     .then(res=>res.json())
    //     .then(data=>setAppoinmentOption(data))
    // },[])

    return (
        <section className='mt-16'>
            <h4 className='text-center text-info text-bold '> You Have Selected Date:{format(selectedDate, 'PP')}  </h4>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOption.map(data => <AppoinmentOption key={data._id}
                        data={data}
                        settreatment={settreatment}
                    ></AppoinmentOption>)
                }
            </div>

            {
                treatment &&
                <OpenModal treatment={treatment}
                    refetch={refetch}
                    settreatment={settreatment}
                    selectedDate={selectedDate}>

                </OpenModal>

            }
        </section>
    );
};

export default AvailableAppoinment;
