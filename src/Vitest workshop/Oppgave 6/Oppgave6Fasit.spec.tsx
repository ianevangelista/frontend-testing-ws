import { test, expect } from 'vitest';
import { users, returnRandomUser } from './Oppgave6.spec';

test('returnRandomUser should return one of the users from the list', () => {
  var user = returnRandomUser();

  expect(user).toBeOneOf(users); 
});
