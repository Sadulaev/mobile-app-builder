"use client";

import { Context, FC, createContext, useState } from "react";

type ContextObjectType = {
  zoom?: number;
  mode?: "dev" | "watch";
  setWorkspace?: (updatedData: ContextObjectType) => void;
};

export const WorkspaceContext: Context<ContextObjectType> = createContext({});

const WorkSpaceContextLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [workspaceData, setWorkspaceData] = useState<ContextObjectType>({
    zoom: 75,
    mode: "watch",
    setWorkspace: () => {},
  });
  const editWorkspaceData = (updatedData: ContextObjectType) => {
    setWorkspaceData({ ...workspaceData, ...updatedData });
  };
  return (
    <WorkspaceContext.Provider
      value={{ ...workspaceData, setWorkspace: editWorkspaceData }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export default WorkSpaceContextLayout;
