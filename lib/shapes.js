class Shape {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  setshapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    // This should be overridden by child classes
    throw new Error('render() method must be implemented');
  }
}

class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="180,50 1,400 400,500" fill="${this.shapeColor}" />
      <text x="180" y="180" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}


class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="128" y="40" width="150" height="150" rx="15"  fill="${this.shapeColor}" />
      <text x="200" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}


module.exports = { Shape, Triangle, Circle, Square };