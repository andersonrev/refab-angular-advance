import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  signal,
} from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styles: `
  //   .is-command {
  //     @apply bg-indigo-700 bg-opacity-200
  //   }
  // `
})
export class CalculatorComponent { }
