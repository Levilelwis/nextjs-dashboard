export async function fetchCardData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });

  const users = await res.json();

  return {
    totalInvoices: 128,
    totalCustomers: users.length,
    paidInvoices: 92,
    pendingInvoices: 36,
    revenue: 32000,
  };
}

export const latestInvoices = [
  {
    id: '1',
    name: 'Lucas Silva',
    email: 'lucas@email.com',
    amount: 320,
    status: 'paid',
    avatar: 'https://i.pravatar.cc/40?img=1',
    date: '2026-05-01',
  },
  {
    id: '2',
    name: 'Maria Souza',
    email: 'maria@email.com',
    amount: 120,
    status: 'pending',
    avatar: 'https://i.pravatar.cc/40?img=2',
    date: '2026-05-02',
  },
  {
    id: '3',
    name: 'João Pedro',
    email: 'joao@email.com',
    amount: 560,
    status: 'paid',
    avatar: 'https://i.pravatar.cc/40?img=3',
    date: '2026-05-03',
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana@email.com',
    amount: 210,
    status: 'paid',
    avatar: 'https://i.pravatar.cc/40?img=4',
    date: '2026-05-04',
  },
];