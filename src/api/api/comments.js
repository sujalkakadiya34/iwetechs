// api/comments.js (CommonJS)
const clientPromise = require("./_mongodb.js");
const nodemailer = require("nodemailer");

module.exports = async function (req, res) {
  // Parse JSON body defensively (Vercel gives req.body already parsed in many cases)
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "iwetechs");
    const col = db.collection("comments");

    if (req.method === "GET") {
      const items = await col
        .find({})
        .sort({ createdAt: -1 })
        .limit(50)
        .project({ email: 0 }) // never expose email publicly
        .toArray();

      return res.status(200).json({ ok: true, items });
    }

    if (req.method === "POST") {
      const name = String(body?.name || "").trim();
      const email = String(body?.email || "").trim();
      const text = String(body?.body || "").trim();

      if (!name || !email || !text) {
        return res.status(400).json({ ok: false, error: "Missing fields" });
      }

      const doc = {
        name,
        email,
        body: text,
        avatar: "/assets/comment-1.webp", // keep your current UI avatar
        createdAt: new Date(),
        ip:
          req.headers["x-real-ip"] ||
          req.headers["x-forwarded-for"] ||
          req.socket?.remoteAddress ||
          null,
        ua: req.headers["user-agent"] || null,
      };

      // Save first
      await col.insertOne(doc);

      // Try to send email (non-fatal if it fails)
      let emailSent = false;
      if (
        process.env.GMAIL_USER &&
        process.env.GMAIL_APP_PASS &&
        process.env.NOTIFY_TO
      ) {
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_APP_PASS, // Gmail App Password
            },
          });

          const textMail =
            `New comment on iwetechs.vercel.app\n\n` +
            `Name: ${doc.name}\nEmail: ${doc.email}\n\n` +
            `Message:\n${doc.body}\n\n` +
            `Time: ${doc.createdAt.toISOString()}`;

          await transporter.sendMail({
            from: `"IWETechs Comments" <${process.env.GMAIL_USER}>`,
            to: process.env.NOTIFY_TO,
            subject: "New comment submitted",
            text: textMail,
          });

          emailSent = true;
        } catch (mailErr) {
          console.error("Email send failed:", mailErr?.message || mailErr);
          // do not throw; we still return success for the saved comment
        }
      }

      // Return safe data to the browser
      const safe = {
        name: doc.name,
        body: doc.body,
        avatar: doc.avatar,
        createdAt: doc.createdAt,
      };
      return res.status(201).json({ ok: true, item: safe, emailSent });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  } catch (err) {
    console.error("API ERROR:", err?.message || err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
};
