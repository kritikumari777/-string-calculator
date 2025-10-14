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

  test('supports custom single char delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('ignores numbers > 1000', () => {
    expect(add('2,1001')).toBe(2);
  });

  test('throws on negatives and lists them', () => {
    expect(() => add('1,-2,3,-4')).toThrow('Negatives not allowed: -2,-4');
  });

  test('supports multi-char custom delimiter', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
  });

  test('supports multiple delimiters', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
  });
});
