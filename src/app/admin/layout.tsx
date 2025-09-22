import HeaderAdmin from "@/app/admin/Header";
import { Sidebar } from "@/app/admin/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-gray-50">
        <HeaderAdmin />
        <div className="flex">
          <Sidebar />

          <div className="flex-1 overflow-y-auto p-5">{children}</div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
