import { test, expect, vi } from 'vitest';
import { FunctionExecutor } from './Oppgave5.spec';

test('should call firstFunction before secondFunction', () => {
  // Opprett en instans av klassen
  const executor = new FunctionExecutor();

  // Spionér på funksjonene
  const firstSpy = vi.spyOn(executor, 'firstFunction');
  const secondSpy = vi.spyOn(executor, 'secondFunction');

  // Kjør funksjonene
  executor.executeFunctions();

  // Sjekk at firstFunction ble kalt før secondFunction
  expect(firstSpy).toHaveBeenCalledBefore(secondSpy);

  // Gjenopprett spioneringen
  firstSpy.mockRestore();
  secondSpy.mockRestore();
});
