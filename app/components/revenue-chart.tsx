'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function RevenueChart() {
  const [mounted, setMounted] = useState(false);

  const [data, setData] = useState([
    { month: 'Jan', revenue: 4000 },
    { month: 'Fev', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Abr', revenue: 4500 },
    { month: 'Mai', revenue: 6000 },
    { month: 'Jun', revenue: 5500 },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔄 simulação de tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          revenue: item.revenue + Math.floor(Math.random() * 200),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div style={{ height: 300 }} />;
  }

  return (
    <div
      style={{
        width: '100%',
        height: 300,
        background: '#fff',
        padding: 20,
        borderRadius: 8,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}