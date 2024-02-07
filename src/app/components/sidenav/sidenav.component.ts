import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  count: number = 0;
  
  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount();
  }

  incrementCount(): void {
    this.counterService.incrementCount(this.count);
    this.count = this.counterService.getCount();
  }
}
