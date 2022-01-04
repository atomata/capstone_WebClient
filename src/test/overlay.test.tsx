/* eslint-disable react-hooks/rules-of-hooks */
import { render } from "@testing-library/react";
import { useState } from "react";
import {act, renderHook} from '@testing-library/react-hooks';
import Overlay from "../components/Overlay/Overlay";
import {useOverlay, useActionList} from "../util/overlayfunc/overlayfunc";


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
