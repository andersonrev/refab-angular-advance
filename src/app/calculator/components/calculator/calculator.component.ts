import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  HostListener,
  inject,
  input,
  signal,
  viewChildren,
} from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/service/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
  // styles: `
  //   .is-command {
  //     @apply bg-indigo-700 bg-opacity-200
  //   }
  // `
})
export class CalculatorComponent {

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  private calculatorService = inject(CalculatorService);

  public resultText = computed(() => this.calculatorService.resultText())
  public subResultText = computed(() => this.calculatorService.subResultText())
  public lastOperator = computed(() => this.calculatorService.lastOperator())

  handleClick(event: string) {
    this.calculatorService.constructNumber(event);
  }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const keyEquivalent: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      'x': '*',
      '/': '÷',
      Enter: '='
    };

    const key = event.key;
    const keyValue = keyEquivalent[key] ?? key;


    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button) => {
      button.handleKeyboardPressedStyle(key);
    });
  }
}
