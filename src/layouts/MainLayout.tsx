"use client";

import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Sidebar from "../components/MainLayout/Sidebar";
import ContentWindow from "../components/MainLayout/ContentWindow";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <Layout>
      <Sider width="6rem">
        <Sidebar />
      </Sider>
      <Content>
        <ContentWindow>{children}</ContentWindow>
      </Content>
    </Layout>
  );
};

export default MainLayout;
