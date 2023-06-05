import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Suspense } from 'react';
import Loading from './Loading'
function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>

      <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
