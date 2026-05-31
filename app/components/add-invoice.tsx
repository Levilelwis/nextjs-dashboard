'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddInvoice() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch('/api/invoices', {
      method: 'POST',
      body: JSON.stringify({
        ...form,
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
      }),
    });

    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Amount" onChange={e => setForm({...form, amount: e.target.value})} />
      <button type="submit">Add Invoice</button>
    </form>
  );
}