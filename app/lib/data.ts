export async function fetchCardData() {
  return {
    totalInvoices: 5,
    totalCustomers: 5,
    paidInvoices: 3,
    pendingInvoices: 2,
  };
}

export const latestInvoices = [
  {
    id: "1",
    name: "Pedro Lima",
    email: "pedro@email.com",
    amount: 780,
    status: "pending",
  },
  {
    id: "2",
    name: "Ana Costa",
    email: "ana@email.com",
    amount: 210,
    status: "paid",
  },
  {
    id: "3",
    name: "João Pedro",
    email: "joao@email.com",
    amount: 560,
    status: "paid",
  },
  {
    id: "4",
    name: "Maria Souza",
    email: "maria@email.com",
    amount: 120,
    status: "pending",
  },
  {
    id: "5",
    name: "Carlos Silva",
    email: "carlos@email.com",
    amount: 950,
    status: "paid",
  },
];