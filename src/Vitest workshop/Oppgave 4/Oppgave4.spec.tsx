// Oppgave 4:
// Lag en test som sjekker hvor mange ganger console.log blir kalt på når logAllUsers blir kjørt

type User = {
    id: number;
    name: string;
};
  
const users: User[] = [
    { id: 1, name: 'Juni' },
    { id: 2, name: 'Ian' }
];

export function logAllUsers(): void {
    for (const user of users) {
        console.log(user.name)
    }
}  