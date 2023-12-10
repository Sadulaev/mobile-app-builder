import React, { FC, useMemo } from "react";
import { Steps, Typography, StepProps, Button } from "antd";
import { MobileProjectType } from "../../types/MobileModels";
import formatDate from "../../utils/formatDate";
import getCustomPalette from "../../utils/getCustomPalette";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

type Props = MobileProjectType;

const ProjectCard: FC<Props> = (props) => {
  const router = useRouter();
  const palette = useMemo(() => getCustomPalette(), []);
  const stepsArray: string[] = [
    "Инициализация",
    "Разработка",
    "Тестирование",
    "Размещение",
  ];
  const customSteps: StepProps[] = useMemo(
    () =>
      stepsArray.map((step) => ({
        title: step,
        description: "",
      })),
    []
  );
  const { id, description, lastUpdate, step, title } = props;
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl p-4 w-[30rem]">
      <Title level={3}>{title}</Title>
      <Text>
        <Text className="font-bold">Последние изменения:</Text>{" "}
        {formatDate(lastUpdate)}
      </Text>
      <Text>{description}</Text>
      <div>
        <Title level={5}>Текущий этап:</Title>
        <Steps
          current={step}
          items={customSteps}
          labelPlacement="vertical"
          size="small"
        />
      </div>
      <div className="flex justify-end w-full">
        <Button
          type="primary"
          className="bg-blue-900"
          onClick={() => router.push(`/builder/${id}`)}
        >
          Перейти к проекту
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
