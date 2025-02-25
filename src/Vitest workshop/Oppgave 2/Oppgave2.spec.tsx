// Oppgave 2:
// Test at reverseString-funksjonen faktisk returnerer reverserte ord

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}