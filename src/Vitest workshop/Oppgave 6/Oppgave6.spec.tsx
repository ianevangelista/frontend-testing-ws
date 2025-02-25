// Oppgave 6:
// Test at returnRandomUser returnerer et av objektene i users-listen

export const users = [
    { navn: "Juni", alder: 27 },
    { navn: "Ian", alder: 45 },
    { navn: "Marcus", alder: 22 }
  ];

export function returnRandomUser() {
    const random = Math.floor(Math.random() * users.length);
    return users[random];
  }
  
  
