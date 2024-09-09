import { Header, Sidebar } from '@/components/layouts';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setIsMobile, setIsShowFull } from '@/store/reducers/layout-slice';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function DashboardLayout() {
  const { isMobile, isShowFull } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const pathname = useLocation().pathname;

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        dispatch(setIsMobile(true));
      } else {
        dispatch(setIsMobile(false));
      }
    });
  }, [dispatch, isShowFull]);
  useEffect(() => {
    if (isMobile) {
      dispatch(setIsShowFull(false));
    }
  }, [isMobile, pathname, dispatch]);
  return (
    <div className='flex h-screen wrapper'>
      <div
        className={clsx(
          'main-content flex-1 flex flex-col ',
          isMobile ? 'ml-0' : isShowFull ? 'ml-[250px]' : 'ml-[80px]'
        )}
      >
        <div className={clsx('header', isMobile ? 'left-0' : isShowFull ? 'left-[250px]' : 'left-[80px]')}>
          <Header />
        </div>
        <div className='flex-1 p-5 overflow-y-auto  mt-20'>
          <Outlet />
        </div>
      </div>
      {!isMobile && (
        <div className={clsx('sidebar', isShowFull ? 'w-[250px]' : 'w-[80px]')}>
          <Sidebar />
        </div>
      )}
      {isMobile && (
        <div className={clsx('sidebar w-[250px] z-[99]', isShowFull ? 'translate-x-[0px]' : 'translate-x-[-250px]')}>
          <Sidebar />
        </div>
      )}
      {isMobile && isShowFull && (
        <div
          onClick={() => dispatch(setIsShowFull(false))}
          className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[98]'
        ></div>
      )}
    </div>
  );
}
