import { ship } from './ship.js';

describe('ship tests', () => {
  test('ship exists', () => {
    expect(ship()).toHaveProperty('size');
    expect(ship()).toHaveProperty('hits');
    expect(ship()).toHaveProperty('isSunk');
  });
  test('ship receives hits', () => {
    const titanic = ship();
    titanic.hit();
    expect(titanic.hits).toBe(1);
  });
  test('ship is the right size', () => {
    const titanic = ship(5);
    expect(titanic.size).toBe(5);
  });
  test('ship is sunk when it receives enough hits', () => {
    const titanic = ship(3);
    titanic.hit();
    titanic.hit();
    expect(titanic.isSunk()).toBe(false);
    titanic.hit();
    expect(titanic.isSunk()).toBe(true);
  });
});
