import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContex } from '../UserContext/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [signUperror,setSignUperror]=useState('');
    const { createUser,UpdateUSer}=useContext(AuthContex)

    const handleLogin=data=>{
      setSignUperror('');
      console.log(data);
      createUser(data.email,data.password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        toast('User Created Successfully.');
        const userInfo={
          displayName:data.name
        }
        UpdateUSer(userInfo)
        .then(()=>{})
        .catch(err=>{
          console.log(err);
        })
      })
      .catch(error=>{
       setSignUperror(error.message);
      })

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'> 
        <form onSubmit={handleSubmit(handleLogin)}>
       <div className="form-control w-full max-w-xs">
   <label className="label"> <span className='lebel-text'> Name</span></label>
  <input type="text"  className="input input-bordered w-full max-w-xs" 
  {...register("name" ,{required:"name Address is required"} )} />
 </div>
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
 
   
       
       <input className='btn btn-accent w-full' value="SignUp" type="submit" />
       {signUperror && <p className='text-red-600'>{signUperror} </p> }
     </form>

     <p>Already Have an account ? <Link to='/login'>login  </Link> </p>
     <div className='divider'>OR</div>
        <button className='btn btn-outline w-full '>signUp WITH GOOGLE</button>
        </div>
       
      </div>
    );
};

export default SignUp;