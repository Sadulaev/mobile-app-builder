"use client";

import { LeftOutlined, RightOutlined, CheckOutlined, MessageOutlined } from "@ant-design/icons";
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
    <div className="h-[14rem] bg-white rounded-md py-4 px-3 flex">
      <div className="my-auto text-xl">
        <LeftOutlined />
      </div>
      <div className="w-full h-full px-3 flex flex-col">
        <Title level={5} className="mb-4 block">
          Today's tasks
        </Title>
          <div className="w-max flex gap-4 h-full">
            {tasks.map((task, index) => {
              const dateString = task.time.toISOString().split('T')[0];
              const timeString = task.time.toLocaleTimeString().split(' ')[0]
              return (
                <div className="w-[8rem] pt-1 pb-2 px-2 bg-gray-200 rounded-2xl flex flex-col justify-between" key={index}>
                  <Text className="text-sm font-[600] text">{task.title}</Text>
                  <div className="flex flex-col">
                    <Text className="text-sm font-semibold">{dateString}</Text>
                    <Text className="text-sm font-semibold">{timeString}</Text>
                  </div>
                  <div className="flex justify-between">
                    <CheckOutlined className="text-[1.5rem]" />
                    <MessageOutlined className="text-[1.5rem]" />
                  </div>
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
