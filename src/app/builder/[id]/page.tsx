"use client";

import React from "react";

import { Typography } from "antd";
import PhoneContentBlock from "../../../components/Builder/PhoneContentBlock";
import { ScreenSizesType } from "../../../types/MobileModels";
import BuilderWorkspaceLayout from "../../../layouts/BuilderWorkspaceLayout";
import { WorkspaceProvider } from "../../../context/WorkSpaceContext";

const { Title } = Typography;

const index = () => {
  const screenDefault: ScreenSizesType = {
    width: "360px",
    height: "740px",
    padding: "12px",
    borderRadius: "48px",
  };

  return (
    <WorkspaceProvider>
      <BuilderWorkspaceLayout>
        <PhoneContentBlock {...screenDefault} />
      </BuilderWorkspaceLayout>
    </WorkspaceProvider>
  );
};

export default index;
