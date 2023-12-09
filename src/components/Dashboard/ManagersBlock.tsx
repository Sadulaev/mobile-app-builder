"use client";

import React, { useMemo } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Typography } from "antd";
import getCustomPalette from "../../utils/getCustomPalette";

const { Title } = Typography;

const ManagersBlock = () => {
  const palette = useMemo(() => getCustomPalette(), []);
  const data = [
    {
      name: `ПК "ГГНТУ"`,
      Задачи: 32,
      Ошибки: 2,
      amt: 2400,
    },
    {
      name: `ПК "Гарвард"`,
      Задачи: 56,
      Ошибки: 6,
      amt: 2210,
    },
    {
      name: `ПК "ЧГПУ"`,
      Задачи: 87,
      Ошибки: 23,
      amt: 2290,
    },
    {
      name: `ПК "ЧГУ"`,
      Задачи: 13,
      Ошибки: 3,
      amt: 2000,
    },
    {
      name: `ПК "РУДН"`,
      Задачи: 24,
      Ошибки: 0,
      amt: 2181,
    },
    {
      name: `ПК "МГУ"`,
      Задачи: 22,
      Ошибки: 0,
      amt: 2500,
    },
    {
      name: `Остальные`,
      Задачи: 132,
      Ошибки: 40,
      amt: 2100,
    },
  ];

  return (
    <div className="w-[45rem] h-[14rem] bg-white rounded-md py-4 px-3 flex flex-col">
      <Title level={5} className="pl-8 pb-2">
        Трекинг задач
      </Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={200} data={data}>
          {/* <CartesianGrid strokeDasharray="10 10" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Задачи" stackId="a" fill={palette.whiteContrast.blue} />
          <Bar dataKey="Ошибки" stackId="a" fill={palette.whiteContrast.red} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ManagersBlock;
