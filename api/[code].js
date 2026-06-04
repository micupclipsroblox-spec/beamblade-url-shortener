const store = globalThis.store || (globalThis.store = {});

export default function handler(req, res) {
  const { code } = req.query;

  const url = store[code];

  if (!url) return res.status(404).send("Not found");

  res.writeHead(302, { Location: url });
  res.end();
}
