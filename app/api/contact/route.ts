import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body?.name ?? '').trim()
    const email = String(body?.email ?? '').trim()
    const message = String(body?.message ?? '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Champs manquants.' }, { status: 400 })
    }

    // (optionnel) petite sécurité : limiter la taille
    if (message.length > 5000) {
      return NextResponse.json({ ok: false, error: 'Message trop long.' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO_EMAIL
    if (!to) {
      return NextResponse.json({ ok: false, error: 'CONTACT_TO_EMAIL manquant.' }, { status: 500 })
    }

    // IMPORTANT:
    // Pour éviter les blocages, on met le from sur une adresse autorisée par Resend,
    // et on met l'email de la personne dans Reply-To.
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: [to],
      subject: `📩 Nouveau message - ${name}`,
      replyTo: email,
      text: `Nouveau message depuis ton portfolio

Nom: ${name}
Email: ${email}

Message:
${message}
`,
    })

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Erreur serveur.' }, { status: 500 })
  }
}
