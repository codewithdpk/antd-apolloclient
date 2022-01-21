import { Menu } from "antd";
import React from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
export const SliderMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      style={{ marginTop: "20px" }}
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        Missions
      </Menu.Item>
    </Menu>
  );
};
