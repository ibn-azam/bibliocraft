'use client'
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
const SignUpPage = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const handleSignupFunc = (data)=>{
       const {email,password} = data;
    }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center m-2">
          SignUp Your Account
        </h2>

        <form onSubmit={handleSubmit(handleSignupFunc)} className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
            {...register('name',{ required: "Name is required" })}
              placeholder="Type Your Name"
            />
           {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URl</legend>
            <input
              type="text"
              className="input"
            {...register('photo',{ required: "Photo URl is required" })}
              placeholder="Type Your Photo URL"
            />
           {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
            {...register('email',{ required: "Email is required" })}
              placeholder="Type Your Email"
            />
           {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              {...register('password',{ required: "Password is required" })}
              placeholder="Type Your Password"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-slate-800">Login</button>
        </form>
        <p>
          I have an account!{" "}
          <Link href={"/signup"} className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
