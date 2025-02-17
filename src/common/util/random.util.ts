class random {
    randomNum(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    fromArray(arr: any[]) {
        return arr[this.randomNum(0, arr.length)];
    }
}

const Random = new random();
export default Random;