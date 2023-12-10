import React, { FC, ReactNode, useContext, useMemo, useState } from "react";
import { Menu, MenuProps, Segmented, Slider, Typography } from "antd";
import getCustomPalette from "../utils/getCustomPalette";
import {
  AppstoreOutlined,
  LayoutOutlined,
  SendOutlined,
  BugOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import Tree, { DataNode } from "antd/es/tree";
import { useWorkspace } from "../context/WorkSpaceContext";

const { Text } = Typography;

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

type Props = {
  children: ReactNode;
};

const BuilderWorkspaceLayout: FC<Props> = (props) => {
  const { children } = props;
  const { state, dispatch } = useWorkspace();
  const { mode, zoom } = state;
  const palette = useMemo(() => getCustomPalette(), []);

  const modeStrings = {
    dev: "Разработка",
    watch: "Просмотр",
  };

  const modeColors = {
    dev: palette.androidGreen,
    watch: palette.appStoreBlue,
  };

  return (
    <div className="h-[calc(100vh-2rem)] relative flex items-center justify-center">
      <div className="absolute left-0 top-0 w-[20rem] h-[5.5rem] bg-white rounded-lg p-2">
        <Text className="font-medium">Увеличение</Text>
        <Slider
          defaultValue={zoom}
          min={50}
          max={100}
          onChange={(e) =>
            dispatch({ type: "UPDATE_WORKSPACE", payload: { zoom: e - 2 } })
          }
        />
      </div>
      <div className="absolute left-0 top-[6.5rem]">
        <Menu
          items={items}
          className="rounded-lg text-lg w-[20rem] h-[calc(100vh-8.5rem)]"
        />
      </div>
      <div className="absolute w-[20rem] h-full p-2 right-0 top-0 rounded-lg bg-white">
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
      <div className="absolute top-0 w-[20rem]">
        <Segmented
          className="font-semibold"
          style={{ background: modeColors[mode] }}
          size="large"
          defaultValue={mode}
          options={[
            { label: modeStrings.dev, value: "dev" },
            { label: modeStrings.watch, value: "watch" },
          ]}
          onChange={(e: "dev" | "watch") =>
            dispatch({ type: "UPDATE_WORKSPACE", payload: { mode: e } })
          }
          block
        />
      </div>
      {/* <div className="absolute top-1 right-[35%] bg-white p-4 rounded-full">
        <RotateRightOutlined className="text-xl" />
      </div> */}
      {children}
    </div>
  );
};

export default BuilderWorkspaceLayout;
