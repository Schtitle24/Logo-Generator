const fs = require('fs/promises');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const { Triangle, Circle, Square } = shapes;

const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput;
};

const generateSVG = async () => {
  try {
    const userInput = await promptUser();

    let selectedShape;
    switch (userInput.shape) {
      case 'Triangle':
        selectedShape = new Triangle(userInput.text, userInput.shapeColor, userInput.textColor);
        break;
      case 'Circle':
        selectedShape = new Circle(userInput.text, userInput.shapeColor, userInput.textColor);
        break;
      case 'Square':
        selectedShape = new Square(userInput.text, userInput.shapeColor, userInput.textColor);
        break;
      default:
        throw new Error('Invalid shape selection');
    }

    const svgContent = selectedShape.render();
    await fs.writeFile('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

generateSVG();