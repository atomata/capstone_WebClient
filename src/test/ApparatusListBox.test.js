import {render, screen} from "@testing-library/react"
import React from 'react';
import ApparatusListBox from '../components/ApparatusListBox'

test('ApparatusListBox  renders without crashing', ()=>{
    render(<ApparatusListBox/>);
})