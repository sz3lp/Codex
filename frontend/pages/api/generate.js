export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { prompt } = req.body;
  res.status(200).json({ result: `Scaffolded response for: ${prompt}` });
}
