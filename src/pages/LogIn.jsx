import Vector from "@/components/logos/Vector";
import { useRouter } from "next/router";
export default function logIn() {
  const handleLogin = async () => {
    e.preventDefault();
    const data = {
      username: e.target.name.value,
      password: e.target.phone.value,
    };
  };
  const router = useRouter();
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
          <form onSubmit={handleSubmit}>
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
            onClick={() => {
              router.push("/dashboard");
            }}
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
