import { createInvoice } from '@/app/lib/data';

export async function POST(req: Request) {
  const body = await req.json();

  await createInvoice({
    name: body.name,
    email: body.email,
    amount: Number(body.amount),
    status: body.status,
    date: body.date,
  });

  return Response.json({ ok: true });
}