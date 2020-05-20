import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
  PoweroffOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import logoImg from "../../assets/logo.svg";
import userImg from "../../assets/user.svg";
import "./styles.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface PropsChildren {
  children?: {};
}

const _Layout = (props: PropsChildren) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => setCollapsed(!collapsed);

  return (
    <Layout>
      <Sider
        trigger={null}
        breakpoint="md"
        onBreakpoint={(broken) => {
          console.log(broken);
          handleCollapsed();
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <img src={logoImg} alt="Logo" width={40} />
          <span className={!collapsed ? "" : "title-invisible"}>TS-ADMIN</span>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Usuários
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => handleCollapsed(),
            }
          )}
          <div style={{ float: "right", paddingRight: 30 }}>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to="/">
                      <PoweroffOutlined /> Sair
                    </Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <a href="#" className="ant-dropdown-link">
                Bem vindo, Admin &nbsp;
                <img src={userImg} alt="Icon user" width={30} /> &nbsp;
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "83vh",
          }}
        >
          {props.children}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center", width: "100%" }}>
        TS Admin ©2020 - Desenvolvido por Armando L. Bretas Neto
      </Footer>
    </Layout>
  );
};

export default _Layout;
