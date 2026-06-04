const store = globalThis.store || (globalThis.store = {});

export default function handler(req, res) {
  const url = req.query.url;

  if (!url) return res.status(400).send("No URL");

  const code = Math.random().toString(36).substring(2, 8);

  store[code] = url;

  res.json({
    short: `${req.headers.origin}/${code}`
  });
}
