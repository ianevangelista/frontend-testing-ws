// Oppgave 8.1

// Lag to testsuiter:
// Én testsuite som kjører sekvensielt med 2 test-caser der du sjekker id for å være 1 og 2.
// Én testsuite som kjører samtidig med 2 test-caser der du sjekker id for å være 3 og 4.

export const fetchData = (id: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for ID: ${id}`);
    }, 1000);
  });
};

// Oppgave 8.2 - Refleksjonsspørsmål
// Hva skjer hvis du gjør alle testene samtidig/concurrent mtp. samme ressurser de begge bruker?
// Når bør du bruke it.concurrent?
