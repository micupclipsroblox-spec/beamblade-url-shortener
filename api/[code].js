import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { code } = req.query;

  const url = await kv.get(code);

  if (!url) return res.status(404).send("Not found");

  res.writeHead(302, { Location: url });
  res.end();
}
