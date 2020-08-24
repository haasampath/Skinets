import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: true }) input: ElementRef;
  @Input() type = 'text';
  @Input() label: string;
  // 197 dependance injection
  constructor(@Self() public controlDir: NgControl) {
    // self say only specific controler without checking highrachy- inside it self not hierachy
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control.validator ? [control.validator] : [];
    const asyncValidators = control.asyncValidator ? [control.asyncValidator] : []; // should be after synchronus validator

    control.setValidators(validators);
    control.setAsyncValidators(asyncValidators);
    control.updateValueAndValidity();
  }

  // first 3 need to be implement most important
  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

  onChange(event) {}

  onTouched() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //  throw new Error('Method not implemented.');
  // }
}
