import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const history = [];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await openai.completions.create({
      model: 'gpt-4-turbo-instruct',
      prompt,
      max_tokens: 256,
    });
    const result = completion.choices?.[0]?.text?.trim() || '';

    history.push({ prompt, result });
    res.status(200).json({ result, history });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate response' });
  }
}
