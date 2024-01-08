class GuessingGame {
    constructor() {}
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.guessTry = Math.round((this.min + this.max) / 2);
    }

    lower() {
        return this.max = this.guessTry;
    }

    greater() {
        return this.min = this.guessTry;
    }
}

module.exports = GuessingGame;
