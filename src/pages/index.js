import Header from "@/components/Header";
import Vector1 from "@/components/logos/Vector1";
import Wifi from "@/components/logos/Wifi";
import Geld from "@/components/logos/Geld";
import Down from "@/components/logos/Down";
import Up from "@/components/logos/Up";
import SpanBlue from "@/components/logos/SpanBlue";
import SpanGreen from "@/components/logos/SpanGreen";
import LogIn from "./logIn";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Barchard from "@/components/Barchart";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="bg-slate-100 w-full h-[1200px]">
      <div>
        <Header />
      </div>
      <div className=" m-auto flex justify-between max-w-[1200px]">
        <div className="mt-[60px] w-[1200px] m-auto flex gap-[25px]">
          <div className="w-[385.1px] h-[219.9px] bg-blue-600 rounded-2xl">
            <div className="flex p-10 items-center gap-2 mb-[25px]">
              <Vector1 />
              <Geld />
            </div>
            <div className="pl-10 flex justify-between">
              <div>
                <p className="text-slate-100">Cash</p>
                <p className="font-extrabold text-2xl leading-8 text-white">
                  10,000,000
                </p>
              </div>
              <div className="pr-10">
                <Wifi />
              </div>
            </div>
          </div>
          <div className="w-[385px] h-[219.9px] bg-white pl-6 rounded-2xl">
            <div className="border-b h-[56px] flex items-center gap-2">
              <SpanBlue />
              Your Income
            </div>
            <div>
              <p className="leading-10 text-3xl mt-[20px]">1,200,000₮</p>
              <p className="text-slate-300">Your Income Amount</p>
            </div>
            <div className="flex gap-2 mt-[24px]">
              <Up />
              <p>32% from last month</p>
            </div>
          </div>
          <div className="w-[385px] h-[219.9px] bg-white pl-6 rounded-2xl">
            <div className="border-b h-[56px] flex items-center gap-2">
              <SpanGreen />
              Total Expenses
            </div>
            <div>
              <p className="leading-10 text-3xl mt-[20px]">1,200,000₮</p>
              <p className="text-slate-300">Your Income Amount</p>
            </div>
            <div className="flex gap-2 mt-[24px]">
              <Down />
              <p>32% from last month</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-auto flex justify-between max-w-[1200px] mt-[24px]">
        <div className="w-[588px] h-[284px] bg-white rounded-2xl">
          <div>
            <Barchard />
          </div>
        </div>
        <div className="w-[588px] h-[284px] bg-white rounded-2xl ">
          <div className="border-b h-[56px] flex items-center px-6 justify-between">
            <p>Income - Expense</p>
            <p>Jun 1 - Nov 30</p>
          </div>
          <div className="h-[228px] flex items-center px-6">
            <div className="w-[180px] h-[180px]">
              <Doughnut
                data={data}
                options={{ plugins: { legend: { display: false } } }}
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-[1200px] mt-[24px]">
        <div className="w-[1200px] h-14 px-6 py-4 rounded-t-[18px] bg-white border-b justify-start items-center gap-2 inline-flex">
          <div className="text-slate-900 font-semibold ">Last Records</div>
        </div>

        <div className="w-full h-20 py-5 px-6 border-b bg-white justify-between items-center inline-flex">
          <div className="justify-start items-center gap-4 flex">
            <div className="w-10 h-10  bg-blue-600 rounded-full flex justify-center items-center">
              <svg
                className=""
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-black font-normal ">Lending & Renting</div>
              <div className="text-gray-500 text-xs font-normal ">
                3 hours ago
              </div>
            </div>
          </div>
          <div className="justify-start items-center">
            <p className="text-lime-500 font-semibold ">-1,000₮</p>
          </div>
        </div>
      </div>
    </div>
  );
}
