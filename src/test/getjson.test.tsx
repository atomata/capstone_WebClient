import {getjsonfromurl} from '../util/getjsonfromurl';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;

test('based on the url, it should return a json object', () => {
    const id = 'fake-data-1'
    const output = "object";
    const testoutput = typeof getjsonfromurl(id)
    expect(testoutput).toBe(output)
})

// const id = 'fake-data-1'
// test('the type of data is object', async () => {
//   const data = await getjsonfromurl(id);
//   const type = typeof data
//   expect(type).toBe('object');
// });

// test('the fetch fails with an error', async () => {
//   try {
//     await getjsonfromurl(id);
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

