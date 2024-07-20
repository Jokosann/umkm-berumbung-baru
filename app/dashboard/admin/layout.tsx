import SideNav from '@/modules/dashboard/admin/_components/SideNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">
      <div className="w-full flex-none lg:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto md:p-4">{children}</div>
    </div>
  );
}
