import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedYear: string = '';

  onYearSelected(year: string): void {
    this.selectedYear = year;
  }
}
