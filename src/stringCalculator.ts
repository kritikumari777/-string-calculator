export function add(input: string): number {
  if (input === null || input === undefined) throw new Error('input is required');

  if (input.trim() === '') return 0;

  let delimiters = /,|\n/;

  const customDelimMatch = input.match(/^\/\/(.+)\n/);
  if (customDelimMatch) {
    const delimPart = customDelimMatch[1];
    const multiMatch = delimPart.match(/\[([^\]]+)\]/g);
    if (multiMatch) {
      const escaped = multiMatch.map(s => s.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      delimiters = new RegExp(escaped.join('|'));
    } else {
      const esc = delimPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      delimiters = new RegExp(esc);
    }
    input = input.slice(customDelimMatch[0].length);
  }

  const parts = input.split(delimiters).map(s => s.trim()).filter(s => s !== '');
  const nums = parts.map(Number);

  const negatives = nums.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
  }
  const sum = nums.reduce((acc, n) => {
    if (Number.isNaN(n)) throw new Error(`Invalid number: ${n}`);
    return acc + (n <= 1000 ? n : 0);
  }, 0);


  return sum;
}


