import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Doughnut() {
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
  );
}
