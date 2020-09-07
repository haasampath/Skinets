import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }], // need to provide cdksteppper  // 231
})
export class StepperComponent extends CdkStepper implements OnInit {
  @Input() linearModeSelected: boolean; // client can select how form behave

  ngOnInit() {
    this.linear = this.linearModeSelected;
  }

  onClick(index: number) {
    this.selectedIndex = index;
    // console.log(this.selectedIndex);
  }
}
