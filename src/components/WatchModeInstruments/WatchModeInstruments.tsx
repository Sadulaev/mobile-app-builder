import {
  LockOutlined,
  MinusOutlined,
  PlusOutlined,
  RotateRightOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useWorkspace } from "../../context/WorkSpaceContext";

const WatchModeInstruments = () => {
  const { state } = useWorkspace();
  const { mode } = state;

  const [isShowingPanels, setIsShowingPanels] = useState<boolean>(false);

  const [isAnimationGo, setIsAnimationGo] = useState<boolean>(false);

  useEffect(() => {
    if (mode === "watch") {
      setIsShowingPanels(true);
      setTimeout(() => setIsAnimationGo(true), 200);
    }
    if (mode === "dev") {
      setIsAnimationGo(false);
      setTimeout(() => setIsShowingPanels(false), 200);
    }
  }, [mode]);
  return (
    <>
      <Button
        className="absolute top-[7%] right-[38%] w-[3.5rem] h-[3.5rem] rounded-full flex justify-center items-center bg-white"
        style={{
          transform: isAnimationGo ? "" : "translate(12rem, 1rem)",
          transition: "0.2s",
        }}
      >
        <RotateRightOutlined className="text-[1.8rem]" />
      </Button>
      {isShowingPanels && (
        <>
          <Button
            className="absolute top-[30%] right-[50%] w-[3.5rem] h-[3.5rem] rounded-full flex justify-center items-center bg-white"
            style={{
              transform: isAnimationGo ? "translate(12rem, 1rem)" : "",
              transition: "0.2s",
            }}
          >
            <LockOutlined className="text-[1.8rem]" />
          </Button>
          <Button
            className="absolute top-[28%] left-[50%] w-[3.5rem] h-[3.5rem] rounded-full flex justify-center items-center bg-white"
            style={{
              transform: isAnimationGo ? "translate(-12rem, 0rem)" : "",
              transition: "0.2s",
            }}
          >
            <PlusOutlined className="text-[1.8rem]" />
          </Button>
          <Button
            className="absolute top-[37%] left-[50%] w-[3.5rem] h-[3.5rem] rounded-full flex justify-center items-center bg-white"
            style={{
              transform: isAnimationGo ? "translate(-12rem, 0rem)" : "",
              transition: "0.2s",
            }}
          >
            <MinusOutlined className="text-[1.8rem]" />
          </Button>
        </>
      )}
    </>
  );
};

export default WatchModeInstruments;
