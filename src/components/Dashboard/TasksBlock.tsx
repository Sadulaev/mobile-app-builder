"use client";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import { TaskType } from "../../types/TaskModel";
import { Typography } from "antd";

const { Title, Text } = Typography;

type Props = {
  tasks: TaskType[];
};

const TasksBlock = (props: Props) => {
  const { tasks } = props;

  return (
    <div className="w-full h-[14rem] bg-white rounded-md py-4 px-3 flex">
      <div className="my-auto text-xl">
        <LeftOutlined />
      </div>
      <div className="grow px-3">
        <Title level={5} className="mb-4 text-sm font-bold block">
          Today's tasks
        </Title>
        <div className="flex gap-4">
          {tasks.map((task, index) => {
            return (
              <div className="pt-1 pb-2 px-2 bg-gray-200 rounded-2xl">
                <Text className="text-sm">{task.title}</Text>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-auto text-xl">
        <RightOutlined />
      </div>
    </div>
  );
};

export default TasksBlock;
