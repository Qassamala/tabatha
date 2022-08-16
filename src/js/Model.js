module.exports = class Model {
    constructor(workOutInterval = 40, restingInterval = 20, numberOfRounds = 10, timeUntilStart = 10, started = false) {
        this.observers = [];
        this.workOutInterval = workOutInterval;
        this.restingInterval = restingInterval;
        this.numberOfRounds = numberOfRounds;
        this.timeUntilStart = timeUntilStart;
        this.started = started;
    }

    setWorkoutInterval(time) {
        this.workOutInterval = time;
    }

    setRestingInterval(time) {
        this.restingInterval = time;
    }

    setNumberOfRounds(rounds) {
        this.numberOfRounds = rounds;
    }

    setTimeUntilStart(time) {
        this.timeUntilStart = time;
    }

    setStarted(started) {
        this.started = started;
        console.log(this.started)
        this.notifyObservers();
    }

    setEndWorkOut(){
        this.workOutInterval = 40;
        this.restingInterval = 20;
        this.numberOfRounds = 10;
        this.timeUntilStart = 10;
        this.started = false;
        this.notifyObservers();
    }

    addObserver(callback) {
        this.observers = [...this.observers, callback]; 
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(e => e !== callback)
    }
    notifyObservers() {
        this.observers.forEach(cb => { 
            try {
                cb()
            } catch (error) {
                console.log(error)
            } 
        });
    }

    
}