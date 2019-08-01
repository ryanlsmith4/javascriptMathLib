/* eslint-disable no-undef */
require('./');
let n = 1.35;

test('Smoke Test', () => {

    expect(true).toBe(true);
    expect(true).not.toBe(false);
});

test('Golden Ratio', () => {

    expect(1.6180339887).toBe(n.goldenRatio());
});

test('Round function', () => {
    
    expect(1).toBe(n.round());
});

test('floor function', () => {
    
    expect(1).toBe(n.floor());
});

test('ceil function', () => {
    
    expect(2).toBe(n.ceil());
});