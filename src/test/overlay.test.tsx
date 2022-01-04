/* eslint-disable react-hooks/rules-of-hooks */
import { Iron } from "@mui/icons-material";
import { render } from "@testing-library/react";
import {act, renderHook} from '@testing-library/react-hooks';
import Overlay from "../components/Overlay/Overlay";
import {useActionList, useOverlay} from "../util/overlayfunc/overlayfunc";


test('Overlay renders without crashing', ()=>{
    render(<Overlay userId="testuser1" experienceData={undefined}/>);
})

describe("showOverlay", () => {
    it("modify showOverlay from true to false", () => {
        const {result} = renderHook(useOverlay)

        act(() => {
            result.current.toggleOverlay()
        })

        expect(result.current.showOverlay).toBe(false)
    })
})

describe('ActionList', () => {
    it('addActionTolist', () => {
        const {result,setResult} = renderHook(useActionList)
        const mockHookInput = jest.fn()
        const mockHookFunction = jest.fn()
        const testTuple: [string,string,string] = ['testpath','testinput','testasset']

        const testFunc = result.current.addActionToList(['testpath1','testinput','0'],result,setResult)
    })
})

test('addActionToList function', ()=> {
    function testAddActionToList(){    
        const testTuple: [string,string,string] = ['testpath','testinput','testasset']
        const [testhook, setTestHook] = useState([])
        addActionToList(testTuple,testhook,setTestHook)
        expect(testhook.includes(testTuple)).toBe(true)
    }