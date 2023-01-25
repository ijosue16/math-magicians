import operate from '../../components/logic/operate';

const numbers = {
  value1: 2,
  value2: 4,
  value3: 7,
  value4: 9,

};

describe('calculations with operate function', () => {
  test('operate to return 6', () => {
    expect(Number(operate(numbers.value1, numbers.value2, '+'))).toBe(6);
  });
  test('operate to return 63', () => {
    expect(Number(operate(numbers.value3, numbers.value4, 'x'))).toBe(63);
  });
  test('operate to return 2', () => {
    expect(Number(operate(numbers.value2, numbers.value1, '÷'))).toBe(2);
  });
  test('operate to return 3', () => {
    expect(Number(operate(numbers.value3, numbers.value2, '-'))).toBe(3);
  });
});
