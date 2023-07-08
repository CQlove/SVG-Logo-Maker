// write Triangle class
class Triangle {
    // use constructor function to create following objects
    constructor(name, nameColor, shapeColor) {
        this.name = name;
        this.nameColor = nameColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="150" y="110" text-anchor="middle" dominant-baseline="central" fill="${this.nameColor}" font-size="48">${this.name}</text>
</svg>`;
    }
}

class Circle {
    constructor(name, nameColor, shapeColor) {
        this.name = name;
        this.nameColor = nameColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="97.5" text-anchor="middle" dominant-baseline="central" fill="${this.nameColor}" font-size="48">${this.name}</text>
</svg>`;
    }
}

class Square {
    constructor(name, nameColor, shapeColor) {
        this.name = name;
        this.nameColor = nameColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
    <text x="150" y="100" text-anchor="middle" dominant-baseline="central" fill="${this.nameColor}" font-size="48">${this.name}</text>
</svg>`;
    }
}

module.exports = { Triangle, Circle, Square };


