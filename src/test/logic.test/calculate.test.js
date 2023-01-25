import calculate from '../logic/calculate';

describe('Check calculator button functionality', () => {
  test('AC Button test', () => {
    const testData = { total: 5, next: 5, operation: '-' };
    const output = { total: null, next: null, operation: null };
    const testBtn = 'AC';

    expect(calculate(testData, testBtn)).toEqual(output);
  });

  test('= Button test', () => {
    const testData = { total: 5, next: 5, operation: '+' };
    const output = { total: '10', next: null, operation: null };
    const testBtn = '=';

    expect(calculate(testData, testBtn)).toEqual(output);
  });

  test('+/- Button test', () => {
    const testData = { next: '5' };
    const output = { next: '-5' };
    const testBtn = '+/-';

    expect(calculate(testData, testBtn)).toEqual(output);
  });

  test('0 Button test', () => {
    const testData = { next: '0' };
    const output = {};
    const testBtn = '0';

    expect(calculate(testData, testBtn)).toEqual(output);
  });
});
