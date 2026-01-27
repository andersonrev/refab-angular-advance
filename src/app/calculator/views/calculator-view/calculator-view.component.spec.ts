import { ComponentFixture, TestBed } from '@angular/core/testing';
import CalculatorViewComponent from './calculator-view.component';
import { Component } from '@angular/core';

@Component({
    selector: 'calculator',
    template: `<div>MockCalcultorComponent</div>`
})
class MockCalcultorComponent {}

describe('CalculatorViewComponent', () => {
    let component: CalculatorViewComponent
    let fixture: ComponentFixture<CalculatorViewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CalculatorViewComponent],
        }).overrideComponent(CalculatorViewComponent, {
            set: {
                imports: [MockCalcultorComponent]
            }
        });
        fixture = TestBed.createComponent(CalculatorViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // importante

    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the calculator component', () => {
        const compiled = fixture.nativeElement as HTMLElement;        
        // console.log(compiled.innerHTML);
        expect(compiled.querySelector('calculator')).toBeTruthy();

    });

    it('should contain the specific CSS classes in the wrapper dev', () => {
        const compiled = fixture.nativeElement as HTMLElement;        
        // console.log(compiled.innerHTML);

        const divElement = compiled.querySelector('div');
        const expectedClasses = "w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden".split(' ');

        expectedClasses.forEach(className => {
            expect(divElement?.classList).toContain(className);
        })


    });

});
