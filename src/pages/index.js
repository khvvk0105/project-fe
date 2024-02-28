import Header from "@/components/Header";
import Vector1 from "@/components/logos/Vector1";
import Wifi from "@/components/logos/Wifi";
import Geld from "@/components/logos/Geld";
import Down from "@/components/logos/Down";
import Up from "@/components/logos/Up";
import SpanBlue from "@/components/logos/SpanBlue";
import SpanGreen from "@/components/logos/SpanGreen";
import House from "@/components/logos/House";
import LogIn from "./LogIn";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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
          <div className="border-b h-[56px] flex items-center px-6">
            <p>Income - Expense</p>
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
      <div className="m-auto max-w-[1200px] mt-[24px] h-[456px] bg-white rounded-xl">
        <p className="w-[1200px] h-[56px] flex items-center p-6 border-b">
          Last records
        </p>
        <div className="">
          <House />
          <p>Lending & Renting</p>
          <p className="">3 hours ago</p>
        </div>
      </div>
    </div>
  );
}
