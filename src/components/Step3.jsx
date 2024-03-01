import Vector from "@/components/logos/Vector";
import { useRouter } from "next/router";
export default function Step3() {
  const router = useRouter();
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-4">
        <Vector />
        <p className="text-3xl">Geld</p>
      </div>
      <div className="mt-[48px]">
        <ul className="steps w-[300px]">
          <li className="step step-info">Currency</li>
          <li className="step step-info">Balance</li>
          <li className="step step-info">Finish</li>
        </ul>
      </div>
      <div className="">
        <div className="w-[50px] h-[50px] bg-blue-700 mt-[141px] rounded-3xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28.7076 9.70757L12.7076 25.7076C12.6147 25.8005 12.5044 25.8743 12.383 25.9246C12.2616 25.975 12.1315 26.0009 12.0001 26.0009C11.8687 26.0009 11.7385 25.975 11.6171 25.9246C11.4957 25.8743 11.3854 25.8005 11.2926 25.7076L4.29257 18.7076C4.10493 18.5199 3.99951 18.2654 3.99951 18.0001C3.99951 17.7347 4.10493 17.4802 4.29257 17.2926C4.48021 17.1049 4.7347 16.9995 5.00007 16.9995C5.26543 16.9995 5.51993 17.1049 5.70757 17.2926L12.0001 23.5863L27.2926 8.29257C27.4802 8.10493 27.7347 7.99951 28.0001 7.99951C28.2654 7.99951 28.5199 8.10493 28.7076 8.29257C28.8952 8.48021 29.0006 8.7347 29.0006 9.00007C29.0006 9.26543 28.8952 9.51993 28.7076 9.70757Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-3xl">Good Job!</p>
      </div>
      <div className="w-[384px]">
        <p className="text-[16px] text-gray-500 mt-[10px] pl-4">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <button
          className="bg-blue-700 w-[384px] h-[48px] rounded-xl text-white mt-[32px]"
          onClick={() => {
            router.push("/");
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
