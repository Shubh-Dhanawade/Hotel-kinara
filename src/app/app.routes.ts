import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ServicesComponent } from './Pages/services/services.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'service',
        component: ServicesComponent
    },
    {
        path: 'about',
        component: AboutUsComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent
    }
];
