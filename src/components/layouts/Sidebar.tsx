import { listMenu } from "@/constants/data";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider
      trigger={null}
      style={{
        height: "100vh",
        padding: "16px 24px",
      }}
      theme="light"
      width={280}
    >
      <div>
        <img src="/images/logo.png" />
        <Menu mode="inline" items={listMenu} className="py-6" />
      </div>
    </Sider>
  );
};
