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

test('toRadian function', () => {

    let k = 320;
    expect(5.585053606381854).toBe(k.toRadian());
});

test('toDegree function', () => {

    let m = 2*Math.PI;
    expect(360).toBe(m.toDegree());
});