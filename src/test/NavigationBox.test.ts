import {render, screen} from "@testing-library/react"
import React from 'react';
import NavigationBox from '../components/NavigationBox'

test('ApparatusSelectedListBox  renders without crashing', ()=>{
    render(<NavigationBox/>);
})