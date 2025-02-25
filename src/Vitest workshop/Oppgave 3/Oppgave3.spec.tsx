// Oppgave 3:
// Test at findUser-funksjonen returnerer null når ugyldig ID er sendt inn

type User = {
    id: number;
    name: string;
};
  
const users: User[] = [
    { id: 1, name: 'Juni' },
    { id: 2, name: 'Ian' }
];
  
export function findUser(id: number): User | null {
    return users.find(user => user.id === id) || null;
}