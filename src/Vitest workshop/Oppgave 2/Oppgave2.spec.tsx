// Oppgave 2.1:
// Test getUserInfo returnerer ønsket objekt

export function getUserInfo(): { name: string; age: number } {
  return { name: "Ian", age: 45 };
}

// Oppgave 2.2 - Til refleksjon:
// Hva skjer hvis du bruker toEqual()?
// Hva er forskjellen på bruk av toBe() og toEqual() i Vitest?
