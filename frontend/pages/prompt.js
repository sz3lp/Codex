import { useState } from 'react';

export default function PromptPage() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);

  const handleGenerate = async () => {
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Request failed');
      }
      setOutput(data.result);
      setHistory(data.history || []);
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-[600px] space-y-4 p-4">
        <h1 className="text-3xl font-bold text-black text-center">CodexOps Prompt Engine</h1>
        <textarea
          className="w-full border rounded p-2" rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            onClick={handleGenerate}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Generate
          </button>
        </div>
        <pre className="border border-gray-300 p-4 font-mono whitespace-pre-wrap text-center">{output}</pre>
        <div className="space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="border rounded p-4 font-mono">
              <p><span className="font-bold">Prompt:</span> {item.prompt}</p>
              <p className="mt-2 whitespace-pre-wrap"><span className="font-bold">Response:</span> {item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
