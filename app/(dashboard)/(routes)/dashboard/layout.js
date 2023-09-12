// import LogoutComp from "@/app/(dashboard)/(routes)/dashboard/logout/page";
import Nav from "@/components/dashboard/nav";
import SideBar from "@/components/dashboard/SideBar";
export default function DashboardLayout({ children }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-16 md:flex-col md:fixed md:inset-y-0 z-[80]">
        <SideBar />
      </div>
      <main className="md:pl-20 h-full flex flex-col">
        <div className="w-full h-12 border-b border-white/10">
          <Nav />
        </div>
        {children}
      </main>
    </div>
  );
}
