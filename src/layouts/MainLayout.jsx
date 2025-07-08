import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      {/* Navbar qo‘shamiz keyinchalik */}
      <main className="min-h-screen px-4 py-6">
        <Outlet />
      </main>
      {/* Footer ham bo‘ladi keyinchalik */}
    </div>
  );
};

export default MainLayout;
