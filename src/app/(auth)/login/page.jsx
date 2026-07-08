'use client'
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
const LogInPage = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const handleLoginFunc = (data)=>{
       const  {name,photo,email,password} = data;
    }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center m-2">
          Login Your Account
        </h2>

        <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">
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
          Don&apos;t have an account?{" "}
          <Link href={"/signup"} className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
