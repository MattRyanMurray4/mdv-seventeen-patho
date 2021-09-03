import { Component } from '@angular/core';

@Component({
  selector: 'patho-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Patho-Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'diseases', icon: 'view_list', title: 'Disease-List' },
  ];
}
