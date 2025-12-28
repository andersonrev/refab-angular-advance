import { Injectable, signal } from '@angular/core';

const numbers = ['0','1', '2', '3','5','6','7','8','9'];
const operators = ['*','-', '+', '/'];
const specialOperators = ['+/-','%', '.', '=','C','Backspace'];

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public resultText = signal<string>('20');
  public subResultText = signal<string>('0');
  public lastOperator = signal<string>('+');
  constructor() { }
}
