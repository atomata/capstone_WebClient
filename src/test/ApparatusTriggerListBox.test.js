import {render, screen} from "@testing-library/react"
import React from 'react';
import ApparatusTriggerListBox from '../components/ApparatusTriggerListBox'

test('ApparatusSelectedListBox  renders without crashing', ()=>{
    render(<ApparatusTriggerListBox/>);
})