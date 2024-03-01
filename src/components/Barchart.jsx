import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function months(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

export default function Barchard() {
  const labels = months({ count: 6 });
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "income",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["lightgreen"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
        borderWidth: 0,
        borderRadius: 12,
        barThickness: 10,
      },
      {
        label: "expense",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["orange"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
        borderWidth: 0,
        borderRadius: 12,
        barThickness: 10,
      },
    ],
  };
  return (
    <div className="h-[284px] w-[588px]  bg-white rounded-xl flex-col justify-start items-start ">
      <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-between items-center inline-flex">
        <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
          Income - Expense
        </div>
        <div className="text-gray-500 text-base font-normal font-['Roboto'] leading-normal">
          Jun 1 - Nov 30
        </div>
      </div>
      <div className="self-stretch h-[228px] px-6 py-8 flex-col justify-start items-start gap-10 flex w-[440px]">
        <div className="self-stretch justify-start items-start gap-[47px] inline-flex">
          <Bar
            data={data2}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                y: {
                  border: {
                    display: false,
                    dash: [3, 4],
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
