import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Component/navbar/navbar.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { HomeComponent } from "./Pages/home/home.component";
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from "./Pages/services/services.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, FormsModule, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel-kinara';
}
