import { test, expect } from 'vitest';
import { findUser } from './Oppgave3.spec';

test('findUser should return null when user ID does not exist', () => {
  expect(findUser(0)).toBeNull();
});
