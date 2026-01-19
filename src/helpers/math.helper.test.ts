import { describe, expect, test } from 'vitest';
import { add, divide, multiply, substract } from './math.helper';

describe('add', () => {
  test('should add two positives numbers', () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });

  test('should add two negative numbers', () => {
    // ! 1. Arrange
    const a = -2;
    const b = -4;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('should subtract two positive numbers', () => {
    const a = 2;
    const b = 4;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });
  test('should subtract two negative numbers', () => {
    const a = -2;
    const b = -4;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });
});