// Oppgave X:
// Test at reverseString-funksjonen faktisk returnerer reverserte ord

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}