import { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Layout from "antd/es/layout";
import theme from "antd/es/theme";
import Affix from "antd/es/affix";
import { Header, Sidebar } from "@/components/layouts";
import { authApi } from "@/apis";
import { useAppDispatch } from "@/store/hook";
import { setGameInfo } from "@/store/reducers/auth-slice";

const { Content } = Layout;

export default function DashboardLayout() {
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const getAccountInfo = async () => {
    await authApi
      .account()
      .then((response) => {
        const { Data, Code } = response.data;
        if (Code === 0) {
          dispatch(setGameInfo(Data));
        } else {
          dispatch(setGameInfo({}));
        }
      })
      .catch(() => {
        dispatch(setGameInfo({}));
      });
  };
  useLayoutEffect(() => {
    getAccountInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Affix>
        <div>
          <Sidebar collapsed={collapsed} />
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
