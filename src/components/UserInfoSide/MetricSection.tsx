"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DATA = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function MetricSection() {
  return (
    <div className="flex w-full flex-col p-2">
      <span className="w-full border-b-2 border-zinc-700 text-2xl font-bold">
        Suas métricas
      </span>

      <div className="my-5 rounded-md border-2 border-black bg-white p-2 shadow-md">
        <BarChart width={500} height={500} data={DATA}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />

          <Legend />
          <Bar dataKey="pv" fill="#ea2113" />
          <Bar dataKey="uv" fill="#00fe61" />
        </BarChart>
      </div>
    </div>
  );
}
