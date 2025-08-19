export async function POST(request) {
  try {
    const data = await request.json();
    // TODO: send email via a provider (Resend/SMTP). For now:
    console.log("Contact submission:", data);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to process" }), { status: 500 });
  }
}
