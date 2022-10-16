// const { sum, subtract } = require('../utils/utils');
import { sum, subtract } from "../utils/utils";

describe('Utility functions', () => {
    test('Addition of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(1, 2)).not.toBe(0);
    });

    test('Subtracts a number from another', () => {
        expect(subtract(3, 2)).toBe(1);
        expect(subtract(1, 2)).not.toBe(6);
    });
});