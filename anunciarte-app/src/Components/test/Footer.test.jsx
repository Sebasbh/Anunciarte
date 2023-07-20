import { render} from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import Footer from '../atoms/Footer';


describe("Footer test", ()=>{
    it("renders with 4 children",()=>{

        const {container}=render(<Footer/>);

        const example=container.querySelector('.footerContainer').children;

        expect(example.length).toBe(4);
    })
})