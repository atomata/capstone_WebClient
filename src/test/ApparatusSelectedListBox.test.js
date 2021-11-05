import {render, screen} from "@testing-library/react"
import React from 'react';
import ApparatusSelectedListBox from '../components/ApparatusSelectedListBox'

test('ApparatusSelectedListBox  renders without crashing', ()=>{
    render(<ApparatusSelectedListBox/>);
})