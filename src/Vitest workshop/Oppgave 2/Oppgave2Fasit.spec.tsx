// Oppgave 2
import { test, expect } from 'vitest';
import { reverseString } from './Oppgave2.spec';

test('reverseString should reverse a given string', () => {
  expect(reverseString('hello')).toBe('olleh');
});