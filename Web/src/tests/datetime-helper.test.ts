import { expect, test } from 'vitest'
import { dateToInputString } from '@/helper/datetime-helper';

test.each([
    [undefined, ''],
    [new Date(2000, 0, 2, 0, 0), '2000-01-02T00:00'],
    [new Date(1950, 9, 12, 12, 30), '1950-10-12T12:30']
])('Return string in YYYY-MM-DDTHH:mm', (input, expected) => {
    const result = dateToInputString(input);
    expect(result).toBe(expected);
});