import Layout from "antd/es/layout";
import Button from "antd/es/button";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface IHeaderProps {
  collapsed: boolean;
  // eslint-disable-next-line no-unused-vars
  setCollapsed: (collapsed: boolean) => void;
}
const { Header: HeaderAnt } = Layout;
export const Header = (props: IHeaderProps) => {
  const { collapsed, setCollapsed } = props;
  return (
    <HeaderAnt
      style={{
        padding: 0,
      }}
      className="bg-white border-l-2"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </HeaderAnt>
  );
};
