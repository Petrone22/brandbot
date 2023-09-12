import Navbar from "@/components/navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
    </>
  );
}
