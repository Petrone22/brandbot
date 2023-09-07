import Navbar from "@/components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
    </>
  );
}