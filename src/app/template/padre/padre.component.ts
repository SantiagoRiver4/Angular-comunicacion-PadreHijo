import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, CommonModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  public nombre:string = 'Santy';
  public saludo:string = 'Ustedes son los mejores en Angular'
  public rutaImagen:string = "./assets/img/Zoro PFP.jpeg"
  public items:string[] = ['item1','item2', 'item3'];

  
public cambiarNombre():void{
    this.nombre = 'elRiri';
}


public addItem(newItem:string):void{
  this.items.push(newItem);
}
}
