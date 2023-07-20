import { fireEvent, render} from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import PopUpBuy from '../atoms/PopUpBuy';

describe("PopUpBuy test", ()=>{

    it("renders as a button", ()=>{
        const {container}=render(<PopUpBuy/>);        

        container.querySelector("button");        

        expect(container.querySelector("button")).toBeDefined();
    })

    it("Opens the popUp window on click", ()=>{
        const {container}=render(<PopUpBuy/>);

        let myButton=container.querySelector("button");

        expect(container.querySelector("[role='presentation']")).toBe(null);

        fireEvent.click(myButton);
       
        expect(container.querySelector("[role='presentation']")).toBeDefined();        
    })

    it("renders on click a window with an image, the price and an add-button", ()=>{
        const {container}=render(<PopUpBuy/>);
        let myButton=container.querySelector("button");
        fireEvent.click(myButton);

        expect(container.querySelector('div img[alt="Content"]')).toBeDefined();
        
    })
})