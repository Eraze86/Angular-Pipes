import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  birthday: Date = new Date(1986, 7, 22)
  firstname: string = "therese"

}
