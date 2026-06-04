import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) return res.status(400).send("No URL");

  const code = Math.random().toString(36).substring(2, 8);

  await kv.set(code, url);

  res.json({
    short: `${req.headers.origin}/${code}`
  });
}
