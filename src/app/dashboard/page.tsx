import React from "react";
import TasksBlock from "../../components/Dashboard/TasksBlock";
import { TaskType } from "../../types/TaskModel";

const tasks: TaskType[] = [
  {
    title: "Спланировать спринт",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
  {
    title: "Спланировать спринт",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
  {
    title: "Спланировать спринт",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
  {
    title: "Спланировать спринт",
    description:
      "Необходимо спланировать следующий спринт, по определенным условиям. Еще договорится с заказчиком",
    time: new Date(),
  },
];

type Props = {};

const index = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <TasksBlock tasks={tasks} />
    </div>
  );
};

export default index;
