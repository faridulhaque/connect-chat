import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import Loading from "../Components/Loading";

const RegisterPage = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (gError || userError || updateError) {
    console.log("gError:" + gError);
    console.log("userError:" + userError);
    console.log("updateError:" + updateError);
  }

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="h-auto pc:w-4/12 notebook:w-2/4 ipad:w-3/4 mobile:w-11/12 micro:w-11/12 bg-white shadow-sm rounded-md px-5 py-10"
      >
        <h2 className="text-center text-2xl text-gray-700">Register</h2>

        <div className="w-11/12 mx-auto mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="w-11/12 mx-auto mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="w-11/12 mx-auto mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="w-11/12 mb-3 mx-auto">
          <small className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login.
            </Link>
          </small>
        </div>

        <button
          type="submit"
          className="w-11/12 mt-2 block mx-auto bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] hover:from-[#ADD8E6] hover:to-[#87CEEB] text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>

        <button
          type="button"
          className="w-11/12 mt-4 block mx-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign up with Gmail
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
