'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Fev', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Abr', revenue: 4500 },
  { month: 'Mai', revenue: 6000 },
];

export default function RevenueChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#2563eb" />
      </LineChart>
    </div>
  );
}