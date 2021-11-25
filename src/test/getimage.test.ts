import {render, screen} from "@testing-library/react"
import React from 'react';
import Getimage from '../components/Getimage'

test('getimage button renders without crashing', ()=>{
    render(<Getimage/>);
})