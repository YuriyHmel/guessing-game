class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.avgValue = Math.round((this.max - this.min) / 2);
    }

    guess() {
        console.log(this.avgValue)
        return this.avgValue;
    }

    lower() {
        this.max = this.avgValue;
        this.avgValue = Math.round((this.max + this.min) / 2);
    }

    greater() {
        this.min = this.avgValue;
        this.avgValue = Math.round((this.max + this.min) / 2);
    }
}

module.exports = GuessingGame;
