import React, { FC, ReactNode, useContext, useMemo, useState } from "react";
import { useWorkspace } from "../context/WorkSpaceContext";
import DevModeInstruments from "../components/DevModeInstruments/DevModeInstruments";
import WatchModeInstruments from "../components/WatchModeInstruments/WatchModeInstruments";
import CommonInstruments from "../components/CommonInstruments/CommonInstruments";

type Props = {
  children: ReactNode;
};

const BuilderWorkspaceLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="h-[calc(100vh-2rem)] relative flex items-center justify-center">
      <CommonInstruments />
      <DevModeInstruments />
      <WatchModeInstruments />
      {children}
    </div>
  );
};

export default BuilderWorkspaceLayout;
