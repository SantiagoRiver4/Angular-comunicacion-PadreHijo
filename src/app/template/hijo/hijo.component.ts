import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() public saludoDelPadre:string = '';
  @Output() public newItemEvent= new EventEmitter<string>();

  public addNewItem(value:string):void{
    this.newItemEvent.emit(value);
  }
}
