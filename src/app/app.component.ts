import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  myArray: Array<number> = [1,2,3];

  getMyName(): string {
    return 'Tomer Gueta';
  }

  addElements(): void {
    this.myArray.push(Math.random() * 20);
  }

  subElements(): void {
    //this.myArray.shift();
    this.myArray.splice(0,5);
  }
}