/* eslint-disable react-hooks/rules-of-hooks */
import { render } from "@testing-library/react";
import {act, renderHook} from '@testing-library/react-hooks';
import { number } from "prop-types";
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
        const {result} = renderHook(useActionList)

        const testTuple: [string,string,string] = ['testpath','testinput','testasset']

        act(()=>{
            result.current.addActionToList(testTuple,result.current.actionList,result.current.setActionList)
        })
        expect(result.current.actionList).toEqual(expect.arrayContaining([testTuple]))
    })

    it('removeActionFromList', () => {
        const {result} = renderHook(useActionList)

        const testValue = 1
        const testTuple: [string,string,string] = ['test1','testinput2','testasset3']
        const testTuple2: [string,string,string] = ['test4','testinput5','testasset6']
        act(()=>{
            result.current.addActionToList(testTuple,result.current.actionList,result.current.setActionList)
            result.current.addActionToList(testTuple2,result.current.actionList,result.current.setActionList)
            result.current.removeActionFromList(testValue,result.current.actionList,result.current.setActionList)
        })
        expect(result.current.actionList).toEqual(expect.arrayContaining([['test1','testinput2','testasset3']]))
    })

    it('handleOnDragEnd', () => {
        const {result} = renderHook(useActionList)

        act(() => {
            const testresult1 = { 
                destination: { index: 0, }, 
                source: { index: 1, }, }
        
            const testTuple: [string,string,string] = ['test1','testinput2','testasset3']
            const testTuple2: [string,string,string] = ['test4','testinput5','testasset6']
            result.current.addActionToList(testTuple,result.current.actionList,result.current.setActionList)
            result.current.addActionToList(testTuple2,result.current.actionList,result.current.setActionList)
            result.current.handleOnDragEnd(testresult1)
        })
        expect(result.current.actionList).toEqual(expect.arrayContaining([['test1','testinput2','testasset3']]))
    })
})
