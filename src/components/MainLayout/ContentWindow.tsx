import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentWindow = (props: Props) => {
  const { children } = props;
  return <div className="w-full h-[100vh] bg-gray-200 p-4">{children}</div>;
};

export default ContentWindow;
