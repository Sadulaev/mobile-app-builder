import React, { FC, useContext } from "react";
import Image from "next/image";

import { Typography } from "antd";

import DefaultScreen from "../../assets/phones/default.svg";
import { ScreenSizesType } from "../../types/MobileModels";
import { WorkspaceContext } from "../../context/WorkSpaceContext";

const { Title } = Typography;

const PhoneContentBlock: FC<ScreenSizesType> = (props) => {
  const { width, height, padding, borderRadius } = props;
  const { zoom } = useContext(WorkspaceContext);
  return (
    <div
      className="absolute top-50% bottom-auto left-auto right-auto z-10"
      style={{
        padding: padding,
        width: width,
        height: height,
        scale: `${zoom}%`,
      }}
    >
      <div
        className="flex items-center justify-center h-full bg-white"
        style={{ borderRadius: borderRadius }}
      >
        <Title className="text-center">Demo watch mode</Title>
      </div>
      <Image
        src={DefaultScreen}
        alt="Phone"
        className="z-20 absolute top-0 left-0 pointer-events-none"
        style={{
          width: width,
          height: height,
        }}
      />
    </div>
  );
};

export default PhoneContentBlock;
