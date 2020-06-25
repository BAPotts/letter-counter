import { Input } from '../src/input.js';

describe('Input', () => {

  test('should create an Input object with user string', () =>
  {
    const userInput = new Input("This is a string");
    expect(userInput.sentence).toEqual("This is a string");
  })
})