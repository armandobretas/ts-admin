import React, { useState } from "react";
import { Layout, Menu, Dropdown, Breadcrumb, Divider } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import logoImg from "../../assets/logo.svg";
import userImg from "../../assets/user.svg";
import "./styles.css";

const { Header, Content, Footer, Sider } = Layout;

interface PropsChildren {
  children?: {};
}

const _Layout = (props: PropsChildren) => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard")

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
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => setActiveMenu("Dashboard")}>
            <Link to="/admin">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} onClick={() => setActiveMenu("Usuários")}>
            <Link to="/users">Usuários</Link>
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
              <div className="ant-dropdown-link header-drop">
                Bem vindo, Admin &nbsp;
                <img src={userImg} alt="Icon user" width={30} /> &nbsp;
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Breadcrumb style={{ padding: 20 }}>
          <Breadcrumb.Item href="#">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            <span>{activeMenu}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            margin: "10px 16px",
            padding: 10,
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
