import { Outlet } from "react-router-dom";
import Layout from "antd/es/layout";
import { useState } from "react";
import theme from "antd/es/theme";
const { Content } = Layout;
import Affix from "antd/es/affix";
import { Header, Sidebar } from "@/components/layouts";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Affix>
        <div>
          <Sidebar />
        </div>
      </Affix>
      <Layout>
        <Affix>
          <div>
            <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>
        </Affix>
        <Content style={{ margin: " 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: "calc(100vh)",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
