import { IconDashboard, IconInventory, IconOrder, IconStore, IconSupplier } from '@/components/common/svgs';
import { SidebarItem } from './sidebar-item';

const listMenu = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <IconDashboard />
  },
  {
    name: 'Inventory',
    path: '/inventory',
    icon: <IconInventory />
  },
  {
    name: 'Suppliers',
    path: '/suppliers',
    icon: <IconSupplier />
  },
  {
    name: 'Orders',
    path: '/orders',
    icon: <IconOrder />
  },
  {
    name: 'Stores',
    path: '/stores',
    icon: <IconStore />
  }
];
export const Sidebar = () => {
  return (
    <div>
      <img src='/images/logo.png' />
      <aside className='mt-10'>
        {listMenu.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </aside>
    </div>
  );
};
