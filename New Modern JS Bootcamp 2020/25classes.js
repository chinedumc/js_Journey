class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }


    innerRGB() {
        const{r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hex() {
        const{r, g, b} = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
    }

}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white'); 
const green = new Color(15, 255, 65, 'leafy');

// EXTENDS, SUPER AND SUB CLASSES
class Pet {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    meow() {
        return 'MEOWWW!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOOF!';
    }
}

const monty = new Cat('monty', 9) 