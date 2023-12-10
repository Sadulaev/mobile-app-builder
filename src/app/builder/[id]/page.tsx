"use client";

import React from "react";

import { Typography } from "antd";
import PhoneContentBlock from "../../../components/Builder/PhoneContentBlock";
import { ScreenSizesType } from "../../../types/MobileModels";
import BuilderWorkspaceLayout from "../../../layouts/BuilderWorkspaceLayout";
import WorkSpaceContextLayout from "../../../context/WorkSpaceContext";

const { Title } = Typography;

const index = () => {
  const screenDefault: ScreenSizesType = {
    width: "360px",
    height: "740px",
    padding: "12px",
    borderRadius: "48px",
  };

  return (
    <WorkSpaceContextLayout>
      <BuilderWorkspaceLayout>
        <PhoneContentBlock {...screenDefault} />
      </BuilderWorkspaceLayout>
    </WorkSpaceContextLayout>
  );
};

export default index;
