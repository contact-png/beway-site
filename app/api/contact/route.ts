
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const endpoint = process.env.FORM_ENDPOINT || 'console';
    if (endpoint === 'console') {
      console.log('[CONTACT]', body);
      return NextResponse.json({ ok: true });
    }
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
    return new NextResponse(await res.text(), { status: res.status });
  } catch (e: any) {
    return new NextResponse('Error', { status: 500 });
  }
}
