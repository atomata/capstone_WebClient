import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import {useSelected} from '../util/previewOverlayFun/previewOverlayfunc'
import PreviewOverlay from '../components/previewOverlay/PreviewOverlay'

test('previewOverlay renders without crashing', () => {
    render(<PreviewOverlay actionList = 'test1,test2,test3'/> )
})


describe("test use selected", () => {
    it('cyclePreviewRight', () => {
        const {result} = renderHook(useSelected)

        act(() => {
            result.current.cyclePreviewRight()
        })

        expect(result.current.selected).toBe(1)
    })

    it('cyclePreviewLeft', ()=>{
        const {result} = renderHook(useSelected)

        act(()=>{
            result.current.cyclePreviewLeft()
        })
        expect(result.current.selected).toBe(0)
    })
})