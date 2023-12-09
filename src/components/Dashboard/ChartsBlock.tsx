"use client";
import React, { useMemo } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Typography } from "antd";
import getLastWeekDates from "../../utils/getLastWeekDates";
import getCustomPalette from "../../utils/getCustomPalette";

const { Title } = Typography;

const ChartsBlock = () => {
  const dates = useMemo(() => getLastWeekDates(), []);
  const palette = useMemo(() => getCustomPalette(), []);
  const data = [
    {
      name: dates[0],
      "Скачиваний на Android": 4000,
      "Скачиваний на IOS": 2400,
      amt: 2400,
    },
    {
      name: dates[1],
      "Скачиваний на Android": 1398,
      "Скачиваний на IOS": 3000,
      amt: 2210,
    },
    {
      name: dates[2],
      "Скачиваний на Android": 9800,
      "Скачиваний на IOS": 2400,
      amt: 2290,
    },
    {
      name: dates[3],
      "Скачиваний на Android": 2780,
      "Скачиваний на IOS": 3908,
      amt: 2000,
    },
    {
      name: dates[4],
      "Скачиваний на Android": 1890,
      "Скачиваний на IOS": 4800,
      amt: 2181,
    },
    {
      name: dates[5],
      "Скачиваний на Android": 2390,
      "Скачиваний на IOS": 3800,
      amt: 2500,
    },
    {
      name: dates[6],
      "Скачиваний на Android": 3490,
      "Скачиваний на IOS": 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="h-[24rem] bg-white rounded-md py-4 px-3 flex flex-col">
      <Title level={5} className="pl-8 pb-2">
        Статистика скачиваний
      </Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={1360}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Скачиваний на IOS"
            stroke={palette.appStoreBlue}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Скачиваний на Android"
            stroke={palette.androidGreen}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsBlock;
