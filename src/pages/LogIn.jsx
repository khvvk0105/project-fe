import Vector from "@/components/logos/Vector";
import { useRouter } from "next/router";
import { useState } from "react";
export default function logIn() {
  const BE_URL = "http://localhost:4000/log-in";
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    e.preventDefault();
    const data = {
      username: e.target.name.value,
      password: e.target.phone.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log("fethc", FETCHED_JSON);

    const userId = FETCHED_JSON.result.rows[0].id;

    localStorage.setItem("userId", userId);

    console.log("user ID", localStorage.getItem("userId"));

    if (FETCHED_JSON.result.rowCount == 1) {
      router.push("/");
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-[384px] h-[426px]">
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
            <label htmlFor="Email"></label>
            <input
              type="text"
              name="Email"
              id="Email"
              className="border rounded-lg w-[370px] h-[48px]"
            />
            <label htmlFor="Password"></label>
            <input
              type="text"
              name="Password"
              className="border rounded-lg w-[370px] h-[48px] mt-[20px]"
            />
            <label htmlFor="Log in"></label>
            <input type="text" name="Log in" id="Log in" />
          </form>
        </div>
        <div className="flex justify-center ">
          <button
            className="border w-[370px] h-[48px] rounded-2xl bg-blue-600 mt-[20px]"
            // handleLoginUser={handleLoginUser}
          >
            Log in
          </button>
        </div>
        <div className="flex gap-4 justify-center items-center mt-[40px]">
          <p>Dont have account?</p>
          <button
            className="text-blue-600"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
