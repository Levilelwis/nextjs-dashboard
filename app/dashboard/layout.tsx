import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {children}
      </main>
    </div>
  );
}