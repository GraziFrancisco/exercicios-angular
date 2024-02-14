

export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('contagem de inativo para ativo ' + this.activeToInactiveCounter);
    }

    incrementInactiveActive() {
        this.inactiveToActiveCounter++;
        console.log('contagem de ativo para inativo ' + this.inactiveToActiveCounter);
    }
}