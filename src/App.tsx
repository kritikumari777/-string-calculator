import { useState } from 'react';
import { add } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    setResult(null);

    try {
      const res = add(input);
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', color: '#aaa' }}>
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={600}
        height={400}
        alt="calculator"
      />

      <h2>String Calculator</h2>

      <h1 style={{ fontSize: '20px' }}>Enter numbers</h1>

      <label htmlFor="numbers" style={{ display: 'block', fontWeight: 600 }}>
        Numbers input, separated by commas or new lines.
      </label>
      <textarea
        id="numbers"
        aria-label="Enter numbers"
        style={{
          margin: '10px 0',
          color: '#111',
          width: '100%',
          minHeight: '50px',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        placeholder="e.g. 1,2,3 or newline"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-invalid={!!error}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: '10px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Calculate
      </button>

      <div aria-live="polite" style={{ marginTop: '12px' }}>
        {result !== null && (
          <p style={{ color: 'green'}}>Result: {result}</p>
        )}
        {error && (
          <p role="alert" style={{ color: 'crimson', fontWeight: 600 }}>
            {error}
          </p>
        )}
      </div>

      <div role='alert'>
         <p>Make sure you enter numbers correctly!</p>
      </div>
    </div>
  );
};

export default App;
