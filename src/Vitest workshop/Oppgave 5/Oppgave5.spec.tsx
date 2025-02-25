// Oppgave 5:
// Test at firstFunction() blir kalt på før secondFunction()

export class FunctionExecutor {
    firstFunction(): void {
        console.log('Hei :)');
    }

    secondFunction(): void {
        console.log('Hadet :(');
    }

    executeFunctions(): void {
        this.firstFunction();
        this.secondFunction();
    }
}
  
