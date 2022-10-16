const { division } = require('../utils/other');

describe('Other Tests', () => {
    test('Quotient of two numbers', () => {
        expect(division(6, 2)).toBe(3)
    });

    test('Equality Test', function () {
        expect('Hello').toEqual('Hello');
    });

    test('Null Test', () => {
        const _null = null;

        expect(_null).toBeDefined();
        expect(_null).not.toBeUndefined();
        expect(_null).toBeFalsy();
        expect(_null).toBeNull();
        expect(_null).not.toBeTruthy();
        expect(_null).not.toBe([]);
    });

    test('Adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        
        expect(value).toBeCloseTo(0.3); // cannot use toBe(value) because of JS floating error
    });
});

describe('Testing Strings', () => {
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });
      
    test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
    });
});