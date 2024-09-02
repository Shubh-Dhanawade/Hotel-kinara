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
      service:"Room's",
      pic: "../assets/room.jpg",
      details:"Your ideal destination for comfort and luxury. Whether you're traveling for business or leisure, our hotel offers a range of beautifully appointed rooms designed to provide the perfect retreat after a long day.",
      price:"Starting from 10$/Night"
    },
    {
      service:"Dinner",
      pic: "../assets/dinner.jpg",
      details:"Our restaurant offers a carefully curated menu that features a blend of local and international cuisines, crafted by our expert chefs using the freshest ingredients.",
      price:"Starting from 5$"
    },{
      service:"Boating",
      pic: "../assets/boat.jpg",
      details:"Whether you're looking to unwind with a peaceful paddle on calm waters or explore the scenic shoreline, our well-maintained boats are available for your enjoyment.",
      price:"Starting from 10$"
    }
  ]

}
