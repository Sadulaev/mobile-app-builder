"use client";

import React, { useMemo } from "react";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Typography } from "antd";
import getCustomPalette from "../../utils/getCustomPalette";

const { Title } = Typography;

const TrafficsBlock = () => {
  const palette = useMemo(() => getCustomPalette(), []);
  const data = [
    {
      name: `ПК "ГГНТУ"`,
      uv: 31.47,
      pv: 2400,
      fill: palette.whiteContrast.blue,
    },
    {
      name: `ПК "Гарвард"`,
      uv: 26.69,
      pv: 4567,
      fill: palette.whiteContrast.green,
    },
    {
      name: `ПК "ЧГПУ" `,
      uv: 15.69,
      pv: 1398,
      fill: palette.whiteContrast.orange,
    },
    {
      name: `ПК "ЧГУ" `,
      uv: 8.22,
      pv: 9800,
      fill: palette.whiteContrast.red,
    },
    {
      name: `ПК "РУДН" `,
      uv: 8.63,
      pv: 3908,
      fill: palette.whiteContrast.yellow,
    },
    {
      name: `ПК "МГУ" `,
      uv: 2.63,
      pv: 4800,
      fill: palette.whiteContrast.turkoiz,
    },
    {
      name: "Остальные",
      uv: 6.67,
      pv: 4800,
      fill: palette.whiteContrast.gray,
    },
  ];

  return (
    <div className="w-[20rem] h-[14rem] bg-white rounded-md py-4 px-3 flex flex-col">
      <Title level={5} className="pl-8 pb-2">
        Топ активных приложений
      </Title>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="30%"
          cy="50%"
          innerRadius="20%"
          outerRadius="110%"
          barSize={10}
          data={data}
        >
          <RadialBar
            // minAngle={15}
            // label={{ position: "insideStart", fill: "#fff" }}
            background
            // clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{
              top: "50%",
              right: 0,
              transform: "translate(0, -50%)",
              lineHeight: "24px",
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficsBlock;
