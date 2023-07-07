class Triangle {
    constructor(name, nameColor, shapeColor) {
        this.name = name;
        this.nameColor = nameColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,190 50,190" style="fill:${this.shapeColor};stroke:black;stroke-width:1" />
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
    <circle cx="150" cy="100" r="80" style="fill:${this.shapeColor};stroke:black;stroke-width:1" />
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
    <rect x="50" y="50" width="200" height="100" style="fill:${this.shapeColor};stroke:black;stroke-width:1" />
    <text x="150" y="100" text-anchor="middle" dominant-baseline="central" fill="${this.nameColor}" font-size="48">${this.name}</text>
</svg>`;
    }
}

module.exports = { Triangle, Circle, Square };


