import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();

  onYearChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.yearSelected.emit(input.value);
  }
  

  resetFilters(): void {
    this.yearSelected.emit('');
  }
}
