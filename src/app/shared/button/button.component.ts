import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() count: number = 0;
  @Input() isMax: boolean = false;
  @Output() onClick = new EventEmitter<number>();
}
