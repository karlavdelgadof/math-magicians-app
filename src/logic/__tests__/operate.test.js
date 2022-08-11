import operate from '../operate';

/** * @jest-environment jsdom */
describe('Test operations with numbers', () => {
  test('Multiply sign', () => {
    expect(operate(5, 8, 'x')).toBe('40');
  });

  test('Divide sign', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('Addition sign', () => {
    expect(operate(6, 4, '+')).toBe('10');
  });
});
