import { describe, expect, test } from 'vitest';
import { add } from './stringCalculator';

describe('string calculator - add', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  test('single number returns value', () => {
    expect(add('5')).toBe(5);
  });

  test('two numbers comma separated', () => {
    expect(add('1,2')).toBe(3);
  });

  test('supports newlines as delimiters', () => {
  expect(add('1\n2,3')).toBe(6);
});

});

