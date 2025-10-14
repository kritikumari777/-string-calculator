import { describe, expect, test } from 'vitest';
import { add } from './stringCalculator';

describe('string calculator - add', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

});

