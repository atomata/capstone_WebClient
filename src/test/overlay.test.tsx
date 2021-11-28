/* eslint-disable react-hooks/rules-of-hooks */
import { render } from "@testing-library/react";
import { useState } from "react";
import Overlay from "../components/Overlay/Overlay";
import {addActionToList} from "../util/overlayfunc/overlayfunc"
test('Overlay renders without crashing', ()=>{
    render(<Overlay json={undefined}/>);
})

test('addActionToList function', ()=> {
    function testAddActionToList(){    
        const testTuple: [string,string] = ['test1','test1.1']
        const [testhook, setTestHook] = useState([])
        addActionToList(testTuple,testhook,setTestHook)
        expect(testhook.includes(testTuple)).toBe(true)
    }

})