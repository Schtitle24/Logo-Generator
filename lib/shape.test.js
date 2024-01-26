const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape Class', () => {
  it('should throw an error for render() method', () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrow('render() method must be implemented');
  });
});

describe('Triangle Class', () => {
  it('should render a triangle SVG string with the given shape color', () => {
    const triangle = new Triangle('ABC', 'red', 'blue');
    expect(triangle.render()).toContain('<polygon points="180,50 1,400 400,500" fill="red" />');
    expect(triangle.render()).toContain('<text x="180" y="180" font-size="40" text-anchor="middle" fill="blue">ABC</text>');
  });
});

describe('Circle Class', () => {
  it('should render a circle SVG string with the given shape color', () => {
    const circle = new Circle('DEF', 'green', 'yellow');
    expect(circle.render()).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
    expect(circle.render()).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">DEF</text>');
  });
});

describe('Square Class', () => {
  it('should render a square SVG string with the given shape color', () => {
    const square = new Square('PAM', 'black', 'white');
    expect(square.render()).toContain('<rect x="128" y="40" width="150" height="150" rx="15"  fill="black" />');
    expect(square.render()).toContain('<text x="200" y="130" font-size="60" text-anchor="middle" fill="white">PAM</text>');
  });
});