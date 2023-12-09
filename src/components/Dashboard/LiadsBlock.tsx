import React, { useMemo } from "react";
import { StopOutlined, LikeOutlined } from "@ant-design/icons";
import { Statistic, Typography } from "antd";
import getCustomPalette from "../../utils/getCustomPalette";

const { Title } = Typography;

const LiadsBlock = () => {
  const palette = useMemo(() => getCustomPalette(), []);
  return (
    <div className="w-[20rem] h-[14rem] bg-white rounded-md py-4 px-3 flex flex-col">
      <Title level={5} className="pl-8 pb-2">
        Статистика обратной связи
      </Title>
      <div className="flex flex-col justify-center">
        <Statistic
          className="text-center pb-4"
          title="Положительные отзывы"
          value={1128}
          prefix={<LikeOutlined className="text-green-500" />}
        />
        <Statistic
          className="text-center"
          title="Предупреждения об ошибках"
          value={35}
          prefix={<StopOutlined className="text-red-500" />}
        />
      </div>
    </div>
  );
};

export default LiadsBlock;
