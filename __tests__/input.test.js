import { Input } from '../src/input.js';

describe('Input', () => {

  test('should create an Input object with user string', () =>
  {
    const userInput = new Input("This is a string");
    expect(userInput.sentence).toEqual("This is a string");
  })
  test('should count strings occurrances of each letter in the alphabet', () =>
  {
    const userInput = new Input("This is a string");
    userInput.letterCounter();
    expect(userInput.letterCounter()).toEqual(letters);
  })
})