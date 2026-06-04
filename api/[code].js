import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { code } = req.query;

  const url = await kv.get(code);

  if (!url) {
    return res.status(404).send("Link not found");
  }

  return res.writeHead(302, {
    Location: url,
  }).end();
}
