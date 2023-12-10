import React, { useContext, useMemo } from "react";

import { Avatar, theme } from "antd";

import {
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  PlayCircleOutlined,
  AppstoreOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "../../context/GlobalContext";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { projects } = useContext(GlobalContext);

  const sidebarPages = useMemo(() => {
    return [
      {
        component: <BarChartOutlined className="text-2xl" />,
        text: "Some test",
        isCurrentPage: pathname.split("/")[1] === "dashboard",
        link: "dashboard",
      },
      {
        component: <AppstoreOutlined className="text-2xl" />,
        text: "Some test",
        isCurrentPage: pathname.split("/")[1] === "projects",
        link: "projects",
      },
      {
        component: <DeploymentUnitOutlined className="text-2xl " />,
        text: "Some test",
        isCurrentPage: pathname.split("/")[1] === "builder",
        link: `builder/${projects[0].id}`,
      },
    ];
  }, [pathname]);

  const sidebarSettings = [
    {
      component: <SettingOutlined className="text-2xl" />,
      text: "Some test",
    },
    {
      component: <LogoutOutlined className="text-2xl rotate-180" />,
      text: "Some test",
    },
  ];

  return (
    <div className={`w-[6rem] h-[100vh] flex flex-col bg-white py-4`}>
      <div
        className={`w-[2.8rem] h-[2.8rem] bg-gradient-to-tr from-orange-500 to-yellow-200 rounded-full flex justify-center items-center mx-auto mb-10`}
      >
        <div
          className={`w-[2.6rem] h-[2.6rem] bg-white rounded-full flex justify-center items-center`}
        >
          <Avatar size="large">
            <span className=" text-3xl">H</span>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-col justify-between grow">
        <div className="flex flex-col gap-8">
          {sidebarPages.map((page, index) => {
            return (
              <div
                className={`mx-auto w-10 h-10 rounded-md flex justify-center items-center transition-[0.2s] ${
                  page.isCurrentPage
                    ? "scale-125 text-white bg-orange-400 pointer-events-none"
                    : "hover:scale-125 hover:cursor-pointer hover:text-white hover:bg-orange-400"
                }`}
                key={index}
                onClick={() => router.push(`/${page.link}`)}
              >
                {page.component}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-8">
          {sidebarSettings.map((page, index) => {
            return (
              <div
                className={`mx-auto w-10 h-10 rounded-md flex justify-center items-center hover:bg-orange-400 hover:text-white hover:cursor-pointer transition-[0.2s] ${
                  true ? "hover:scale-125" : ""
                }`}
                key={index}
              >
                {page.component}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
