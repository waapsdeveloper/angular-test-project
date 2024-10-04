import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blue-box',
  templateUrl: './blue-box.component.html',
  styleUrl: './blue-box.component.scss'
})
export class BlueBoxComponent {

  @Input('color') color: string = '#000000';
  @Output('clickBehaviour') clickBehaviour = new EventEmitter();

}
