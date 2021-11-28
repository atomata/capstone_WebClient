import {getApparatusFromCloud} from '../util/getDataFromCloud';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;

test('based on the url, it should return a json object', () => {
    const id = 'fake-data-1'
    const output = "object";
    const testoutput = typeof getApparatusFromCloud(id)
    expect(testoutput).toBe(output)
})
