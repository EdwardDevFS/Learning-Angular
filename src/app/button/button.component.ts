import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template:  `<button class="btn btn-primary" [ngStyle]="{'background-color': color}">{{label}}</button>` ,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ->', changes);
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

}
