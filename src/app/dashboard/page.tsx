"use client";
import React from "react";
import TasksBlock from "../../components/Dashboard/TasksBlock";
import { TaskType } from "../../types/TaskModel";
import ChartsBlock from "../../components/Dashboard/ChartsBlock";
import TrafficsBlock from "../../components/Dashboard/TrafficsBlock";
import ManagersBlock from "../../components/Dashboard/ManagersBlock";
import LiadsBlock from "../../components/Dashboard/LiadsBlock";

const tasks: TaskType[] = [
  {
    title: "Сделать верстку",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
  {
    title: "Сделать верстку",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
  {
    title: "Сделать верстку",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
  {
    title: "Сделать верстку",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
];

type Props = {};

const index = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <TasksBlock tasks={tasks} />
      <ChartsBlock />
      <div className="flex gap-4">
        <TrafficsBlock />
        <ManagersBlock />
        <LiadsBlock />
      </div>
    </div>
  );
};

export default index;
