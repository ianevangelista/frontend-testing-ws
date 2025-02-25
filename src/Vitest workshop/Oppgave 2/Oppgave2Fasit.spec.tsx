// Oppgave 2
import { test, expect } from 'vitest';
import { getUserInfo } from './Oppgave2.spec';

test('getUserInfo should return the correct object', () => {
  const userInfo = getUserInfo();
  expect(userInfo).toEqual({ name: 'Ian', age: 45 });

  expect(userInfo).not.toBe({ name: 'Ian', age: 45 }); // Legg merke til "not.toBe"
});