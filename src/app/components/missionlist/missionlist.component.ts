import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../interfaces/launch.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit, OnChanges {
  @Input() filteredYear: string = '';
  missions: Launch[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredYear']) {
      if (this.filteredYear) {
        this.spacexService.getLaunchesByYear(this.filteredYear).subscribe(data => this.missions = data);
      } else {
        this.loadAllMissions();
      }
    }
  }

  loadAllMissions(): void {
    this.spacexService.getAllLaunches().subscribe(data => this.missions = data);
  }
}
