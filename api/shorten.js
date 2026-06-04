import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { url } = req.body;

  const code = Math.random().toString(36).substring(2, 8);

  await kv.set(code, url);

  res.json({
    short: `${req.headers.origin}/${code}`
  });
}
