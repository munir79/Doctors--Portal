import React, { useContext, useState } from 'react';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../UserContext/AuthProvider';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [loginerror,setloginerror]=useState('');
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/' ;
    const {signIn}=useContext(AuthContex);
    const handleLogin=data=>{
      setloginerror('');
      console.log(data);
      signIn(data.email,data.password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        navigate(from,{replace:true})
      })
      .catch(error=>{
        console.log(error.message);
        setloginerror(error.message);
      })

    }
    
    return (
      
     <div className='h-[800px] flex justify-center items-center'>
       <div className='w-96 p-7'> 
       <form onSubmit={handleSubmit(handleLogin)}>
      <div className="form-control w-full max-w-xs">
  <label className="label"> <span className='lebel-text'> email</span></label>
 <input type="text"  className="input input-bordered w-full max-w-xs" 
 {...register("email" ,{required:"Email Address is required"} )} />
</div>
      <div className="form-control w-full max-w-xs">
      {errors.mail &&    <p className='text-red-600'>{errors.email?.message}</p>}
  <label className="label"> <span className='lebel-text'> Password</span></label>
 <input type="password"  className="input input-bordered w-full max-w-xs" {...register("password" ,{required:true})} />
 <label className="label"> <span className='lebel-text'> forget Password?</span></label>
 {errors.password &&    <p className='text-red-600'>{errors.password?.message}</p>}
</div>

  
      
      <input className='btn btn-accent w-full' value="Login" type="submit" />
      {loginerror && <p>{loginerror} </p>}
    </form>
    <p>New to Doctors Portal ? <Link to='/signup'>create an account </Link> </p>
    <div className='divider'>OR</div>
       <button className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
       </div>
      
     </div>
    );
};

export default Login;