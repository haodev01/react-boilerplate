import Layout from "antd/es/layout";
import Button from "antd/es/button";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/store/hook";

interface IHeaderProps {
  collapsed: boolean;
  // eslint-disable-next-line no-unused-vars
  setCollapsed: (collapsed: boolean) => void;
}
const { Header: HeaderAnt } = Layout;
export const Header = (props: IHeaderProps) => {
  const { collapsed, setCollapsed } = props;
  const gameInfo = useAppSelector((state) => state.auth.gameInfo);
  return (
    <HeaderAnt
      style={{
        padding: 0,
      }}
      className="bg-white border-l-2"
    >
      <div className="flex items-center gap-4">
        <h1>{gameInfo?.TotalPoint} point</h1>
        <h2>Logo</h2>
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
      </div>
    </HeaderAnt>
  );
};
