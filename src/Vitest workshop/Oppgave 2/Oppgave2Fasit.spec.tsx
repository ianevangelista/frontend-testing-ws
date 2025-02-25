// Oppgave 2
import { test, expect } from 'vitest';

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

test('reverseString should reverse a given string', () => {
  expect(reverseString('hello')).toBe('olleh');
});