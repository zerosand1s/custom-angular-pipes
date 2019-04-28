import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-angular-pipes';

  public stringToReverse = '';
  public showReverse = false;

  reverseString() {
    this.showReverse = true;
  }
}
