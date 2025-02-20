class random {
    randomNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    fromArray<T>(arr: T[]): T {
        return arr[this.randomNum(0, arr.length)];
    }
}

const Random = new random();
export default Random;