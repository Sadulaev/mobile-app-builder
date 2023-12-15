import { Menu, MenuProps, Tree } from "antd";
import { DataNode } from "antd/es/tree";
import React, { FC, useEffect, useState } from "react";
import {
  AppstoreOutlined,
  BugOutlined,
  LayoutOutlined,
  MobileOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useWorkspace } from "../../context/WorkSpaceContext";

const DevModeInstruments = () => {
  const { state } = useWorkspace();
  const { mode } = state;

  const treeData: DataNode[] = [
    {
      title: "Глобальный слой",
      key: "0",
      children: [
        {
          title: "Блок",
          key: "0-0",
          children: [
            {
              title: "Вертикальный центр",
              key: "0-0-0",
              children: [{ title: "Demo watch mode", key: "0-0-0-0" }],
              disabled: true,
            },
          ],
        },
      ],
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: "Дерево компонентов",
      key: "tree",
      icon: <LayoutOutlined />,
    },
    {
      label: "Библиотека компонентов",
      key: "components",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Действия и запросы",
      key: "actions",
      icon: <SendOutlined />,
    },
    {
      label: "Оптимизация",
      key: "optimization",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Поиск уязвимых мест",
      key: "debug",
      icon: <BugOutlined />,
      disabled: true,
    },
    {
      label: "Запуск продукта",
      key: "debug",
      icon: <MobileOutlined />,
      disabled: true,
    },
  ];

  const [isShowingPanels, setIsShowingPanels] = useState<boolean>(false);

  const [isAnimationGo, setIsAnimationGo] = useState<boolean>(false);

  useEffect(() => {
    if (mode === "dev") {
      setIsShowingPanels(true);
      setTimeout(() => setIsAnimationGo(true), 200);
    }
    if (mode === "watch") {
      setIsAnimationGo(false);
      setTimeout(() => setIsShowingPanels(false), 200);
    }
  }, [mode]);

  return (
    <>
      {isShowingPanels && (
        <div
          className="absolute w-[20rem] h-full p-2 transition-[0.2s] top-0 right-[-22rem] rounded-lg bg-white"
          style={{
            transform: `translateX(${isAnimationGo ? "-22rem" : "0"})`,
          }}
        >
          <Tree
            className="draggable-tree text-base font-medium"
            //   defaultExpandedKeys={expandedKeys}
            autoExpandParent
            draggable
            blockNode
            //   onDragEnter={onDragEnter}
            //   onDrop={onDrop}
            treeData={treeData}
          />
        </div>
      )}

      <div
        className="absolute left-[-22rem] top-[6.5rem] transition-[0.2s]"
        style={{
          transform: `translateX(${isAnimationGo ? "22rem" : "0"})`,
        }}
      >
        <Menu
          items={items}
          className="rounded-lg text-lg w-[20rem] h-[calc(100vh-8.5rem)]"
        />
      </div>
    </>
  );
};

export default DevModeInstruments;
