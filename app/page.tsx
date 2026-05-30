import { fetchCardData } from "@/app/lib/data";
import RevenueChart from "@/app/components/revenue-chart";
import LatestInvoices from "@/app/components/latest-invoices";
import RenderingDemo from "@/app/components/rendering-demo";

export default async function Page() {
  const data = await fetchCardData();

  return (
    <main style={{ padding: 20 }}>
      <h1>📊 DASHBOARD NEXT.JS</h1>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          gap: 20,
          margin: "20px 0",
          flexWrap: "wrap",
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

      {/* RENDERIZAÇÃO (NOVO) */}
      <RenderingDemo />
    </main>
  );
}