import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HomeComponent } from '../../Pages/home/home.component';
import { ServicesComponent } from '../../Pages/services/services.component';
import { ContactUsComponent } from '../../Pages/contact-us/contact-us.component';
import { AboutUsComponent } from '../../Pages/about-us/about-us.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , RouterModule , HomeComponent , ServicesComponent , ContactUsComponent , AboutUsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
