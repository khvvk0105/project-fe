import Vector from "@/components/logos/Vector";
import { useRouter } from "next/router";
export default function Step2({ showLoader, setShowLoader }) {
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
              d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-3xl">Set up your cash Balance</p>
      </div>
      <div className="w-[384px]">
        <form action="Email">
          <input
            type="text"
            name="Email"
            id="Email"
            className="border rounded-lg w-[370px] h-[48px]"
          />
        </form>

        <p className="text-xs text-gray-500 mt-[10px]">
          How much cash do you have in your wallet?
        </p>
        <button
          className="bg-blue-700 w-[384px] h-[48px] rounded-xl text-white mt-[32px]"
          onClick={() => {
            setShowLoader("step3");
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
