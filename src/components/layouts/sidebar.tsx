import { listMenu } from "@/constants/data";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
const { Sider } = Layout;

interface ISidebarProps {
  collapsed: boolean;
}
export const Sidebar = (props: ISidebarProps) => {
  const { collapsed } = props;
  return (
    <Sider
      trigger={null}
      style={{
        height: "100vh",
        padding: "16px 24px",
      }}
      collapsible
      collapsed={collapsed}
      theme="light"
      width={280}
      collapsedWidth={100}
    >
      <div>
        <img src="/images/logo.png" />
        <Menu mode="inline" items={listMenu} className="py-6" />
      </div>
    </Sider>
  );
};
