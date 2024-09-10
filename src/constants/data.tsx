import {
  IconDashboard,
  IconInventory,
  IconOrder,
  IconStore,
  IconSupplier,
} from "@/components/common/svgs";
import { Link } from "react-router-dom";

export const listMenu = [
  {
    key: "Dashboard",
    label: (
      <Link className="ml-4 " to="/dashboard">
        {" "}
        Dashboard
      </Link>
    ),
    icon: <IconDashboard />,
  },
  {
    key: "Inventory",
    label: (
      <Link className="ml-4" to="/inventory">
        {" "}
        Inventory
      </Link>
    ),
    icon: <IconInventory />,
  },
  {
    key: "Suppliers",
    label: (
      <Link className="ml-4" to="/suppliers">
        {" "}
        Suppliers
      </Link>
    ),
    icon: <IconSupplier />,
  },
  {
    key: "Orders",
    label: (
      <Link className="ml-4" to="/orders">
        {" "}
        Orders
      </Link>
    ),
    icon: <IconOrder />,
  },
  {
    key: "Stores",
    label: (
      <Link className="ml-4" to="/stores">
        {" "}
        Manage Store
      </Link>
    ),
    icon: <IconStore />,
  },
];
