import { Layout, Menu, Anchor, Row, Col } from "antd";
import { FireOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { SliderMenu } from "../../components/shared/SliderMenu";

const { Header, Content, Footer, Sider } = Layout;

export const AntDesignWrapper = ({ children }) => {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            padding: "20px",
          }}
        >
          <FireOutlined style={{ color: "white", fontSize: "40px" }} />
        </div>
        <SliderMenu />
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 200, minHeight: "100vh" }}
      >
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          cwdpk Design ©2018 Created by Deepak Suthar
        </Footer>
      </Layout>
    </Layout>
  );
};
