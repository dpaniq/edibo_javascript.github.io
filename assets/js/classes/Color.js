export class Color {
    randomRGB() {
        return parseInt(Math.floor(Math.random() * 255));
    }

    randomColor() {
        return `rgba(${this.randomRGB()}, ${this.randomRGB()}, ${this.randomRGB()}, 0.3)`
    }
}
