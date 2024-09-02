import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule , NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  myData:any = [
    {
      service:"Service 1",
      details:"abcd",
      price:23
    },
    {
      service:"Service 2",
      details:"abcd",
      price:23
    },{
      service:"Service 3",
      details:"abcd",
      price:23
    }
  ]

}
