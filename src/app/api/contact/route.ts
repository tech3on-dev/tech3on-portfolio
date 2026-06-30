import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

/**
 * Contact form endpoint.
 *
 * Validates the payload server-side with the same Zod schema used on the
 * client. By default it logs the submission. To actually deliver leads, wire
 * in your provider of choice below (e.g. Resend, SendGrid, a CRM webhook, or
 * persist to a database) using the environment variables in `.env.example`.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  try {
    // ----------------------------------------------------------------
    // TODO: Integrate your delivery mechanism here. Example with Resend:
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "TECH3ON <leads@tech3on.com>",
    //   to: process.env.CONTACT_TO_EMAIL!,
    //   replyTo: lead.email,
    //   subject: `New inquiry: ${lead.projectType} — ${lead.company}`,
    //   text: JSON.stringify(lead, null, 2),
    // });
    // ----------------------------------------------------------------

    console.info("[contact] New lead received:", {
      name: lead.name,
      company: lead.company,
      email: lead.email,
      projectType: lead.projectType,
      budget: lead.budget,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Failed to process lead:", error);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again later." },
      { status: 500 },
    );
  }
}
