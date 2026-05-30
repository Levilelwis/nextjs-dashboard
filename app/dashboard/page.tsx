import { fetchCardData } from "@/app/lib/data";
import RevenueChart from "@/app/components/revenue-chart";
import LatestInvoices from "@/app/components/latest-invoices";
import RenderingDemo from "@/app/components/rendering-demo";

export default async function Page() {
  const data = await fetchCardData();

  return (
    <main
      style={{
        padding: 20,
        maxWidth: 1200,
        margin: "0 auto",
        overflowX: "auto",
      }}
    >
      <h1>📊 DASHBOARD</h1>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          margin: "20px 0",
        }}
      >
        <div>🧾 Invoices: {data.totalInvoices}</div>
        <div>👥 Customers: {data.totalCustomers}</div>
        <div>💰 Paid: {data.paidInvoices}</div>
        <div>⏳ Pending: {data.pendingInvoices}</div>
      </div>

      {/* GRÁFICO */}
      <h2>📈 Revenue Chart</h2>
      <RevenueChart />

      {/* TABELA */}
      <LatestInvoices />

      {/* RENDERIZAÇÃO */}
      <RenderingDemo />
    </main>
  );
}