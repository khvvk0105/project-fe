import Loading from "@/components/Loading";
import Step1 from "@/components/Step1";
import Vector from "@/components/logos/Vector";
import { useRouter } from "next/router";
import { useState } from "react";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

export default function SignUp({ showLoader, setShowLoader }) {
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   let newId = nanoid();
  //   const data = {
  //     name: e.target.username.value,
  //     age: Number(e.target.age.value),
  //     id: newId,
  //   };
  // }
  const router = useRouter();
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="w-[384px] h-[426px] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mt-[10px] gap-2">
          <Vector />
          <h2 className="text-3xl">Geld</h2>
        </div>
        <div className="flex justify-center items-center flex-col mt-[40px]">
          <h2 className="text-xl font-semibold">Welcome Back</h2>
          <p className="text-xl font-extralight">
            Welcome Back, Please enter your details
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-[40px]">
          <form>
            <label htmlFor="Name"></label>
            <input
              type="text"
              name="Name"
              className="border rounded-lg w-[370px] h-[48px] "
            />
            <label htmlFor="Email"></label>
            <input
              type="text"
              name="Email"
              id="Email"
              className="border rounded-lg w-[370px] h-[48px] mt-[20px]"
            />
            <label htmlFor="Password"></label>
            <input
              type="text"
              name="Password"
              className="border rounded-lg w-[370px] h-[48px] mt-[20px]"
            />
            <label htmlFor="Re-Password"></label>
            <input
              type="text"
              name="Re-Password"
              className="border rounded-lg w-[370px] h-[48px] mt-[20px]"
            />

            <label htmlFor="Log in"></label>
            <input type="text" name="Log in" id="Log in" />
          </form>
        </div>

        <div className="flex justify-center ">
          <button
            className="border w-[370px] h-[48px] rounded-2xl bg-blue-600 mt-[20px]"
            onClick={() => {
              // router.push("/Loading");
              setShowLoader("loading");
            }}
          >
            Sign up
          </button>
        </div>
        <div className="flex gap-4 justify-center items-center mt-[40px]">
          <p>Already have account?</p>
          <button
            className="text-blue-600"
            onClick={() => {
              router.push("/logIn");
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
