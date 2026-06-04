export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { url } = req.body;

  const code = Math.random().toString(36).slice(2, 8);

  res.status(200).json({
    short: `${req.headers.origin}/${code}`,
    original: url
  });
}
