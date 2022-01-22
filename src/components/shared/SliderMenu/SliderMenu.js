import { Menu } from "antd";
import React from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../../redux/actions/SlidersAction";
import history from "../../../config/RouterList/History";

export const SliderMenu = () => {
  const { selectedTab } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  const handleTabChange = (tab, route) => {
    dispatch(setTab());
    history.push(route);
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      style={{ marginTop: "20px" }}
    >
      <Menu.Item
        key="1"
        icon={<UserOutlined />}
        onClick={() => handleTabChange(1, "/")}
      >
        Home
      </Menu.Item>

      <Menu.Item
        key="2"
        icon={<VideoCameraOutlined />}
        onClick={() => handleTabChange(2, "/missions")}
      >
        Missions
      </Menu.Item>
    </Menu>
  );
};
