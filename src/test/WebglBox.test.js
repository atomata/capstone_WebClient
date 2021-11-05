import {render, screen} from "@testing-library/react"
import React from 'react';
import WebglBox from '../components/WebglBox'

test('ApparatusSelectedListBox  renders without crashing', ()=>{
    render(<WebglBox/>);
})