// Oppgave 7:
// Lag én testsuite med tre test-caser der du tester alle funksjoner i Counter-klassen.

// Tips: sjekk ut describe, it og beforeEach i vitest.

export class Counter {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getValue() {
    return this.count;
  }
}
