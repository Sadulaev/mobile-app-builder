import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentWindow = (props: Props) => {
  const { children } = props;
  return (
    <div className="w-full h-[100vh] bg-gray-200 p-4 overflow-y-auto overflow-x-hidden">
      <div className="h-auto">{children}</div>
    </div>
  );
};

export default ContentWindow;
