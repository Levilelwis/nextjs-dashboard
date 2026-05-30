import { latestInvoices } from '@/app/lib/data';

export default function LatestInvoices() {
  return (
    <div>
      <h2>🧾 Latest Invoices</h2>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {latestInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.name}</td>
              <td>{invoice.email}</td>
              <td>${invoice.amount}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}