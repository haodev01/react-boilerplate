import { useAppSelector } from "@/store/hook";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

interface ISidebarItemProps {
  item: {
    name: string;
    path: string;
    icon: JSX.Element;
  };
}
export const SidebarItem = (props: ISidebarItemProps) => {
  const { item } = props;
  const path = useLocation();
  const { isShowFull } = useAppSelector((state) => state.layout);
  return (
    <Link
      to={item.path}
      className={clsx(
        "hover:text-primary  flex items-center gap-x-4 py-4 text-md font-medium cursor-pointer",
        path.pathname === item.path ? "text-primary" : "text-679"
      )}
    >
      {item.icon}
      {isShowFull && <span>{item.name}</span>}
    </Link>
  );
};
