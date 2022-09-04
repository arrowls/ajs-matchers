import setHealthTable from '../src/index.js';

test('should sort array correctly', () => {
    let result = setHealthTable([
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ]);
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);
});

test.each([
    [{}, null],
    ['12345', null],
    [438927, null],
    [{health: 'test'}, null],
    [false, null],
])('should work with invalid values', (dataObject, expected) => {
    let result = setHealthTable(dataObject);
    expect(result).toEqual(expected)
})