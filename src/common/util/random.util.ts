class random {
    randomNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    fromArray<T>(arr: T[]): T {
        return arr[this.randomNum(0, arr.length)];
    }
    phone(): string {
        return `+${this.randomNum(1, 999)}-${this.randomNum(100, 999)}-${this.randomNum(100, 999)}-${this.randomNum(1000, 9999)}`;
    }
    zip(): string {
        return `${this.randomNum(10000, 99999)}`;
    }
}

const Random = new random();
export default Random;