import calculate from '../calculate';

/** * @jest-environment jsdom */

test('AC button returns object props equal null', () => {
  const obj = {
    next: null,
    operation: null,
    total: null,
  };
  calculate({}, 'AC');
  expect(obj.next).toBe(null);
});
