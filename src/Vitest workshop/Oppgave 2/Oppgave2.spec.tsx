// Oppgave 2:
// Test getUserInfo returnerer ønsket objekt

export function getUserInfo(): { name: string; age: number } {
    return { name: 'Ian', age: 45 };
  }

// Oppgave 2.1 - Til refleksjon:
// Hva er forskjellen på bruk av toBe() og toEqual() i Vitest?