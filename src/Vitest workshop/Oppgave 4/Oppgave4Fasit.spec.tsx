import { test, expect, vi } from 'vitest';
import { logAllUsers } from './Oppgave4.spec';

test('logAllUsers should call console.log correct amount of times', () => {
  // Spionér på console.log
  const logSpy = vi.spyOn(console, 'log');

  logAllUsers();

  expect(logSpy).toHaveBeenCalledTimes(2);

  // Fjern spioneringen for å unngå påvirkning på andre tester
  logSpy.mockRestore();
});