import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setIsShowFull } from '@/store/reducers/layout-slice';
import { Menu } from 'lucide-react';
export const Header = () => {
  const { isShowFull } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setIsShowFull(!isShowFull));
  };
  return (
    <div className='flex items-center justify-between'>
      <div>
        <Menu onClick={handleClick} className='cursor-pointer' />
      </div>
      <h1>Header</h1>
    </div>
  );
};
