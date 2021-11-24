import getjsonfromurl from '../../api/getjson/getjson';


test('based on the url, it should return a json object', () => {
    const id = 'fake-data-1'
    const output = "object";
    const testoutput = typeof getjsonfromurl(id)
})
