import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  count: number = 0;
  
  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount();
  }

  incrementCount(): void {
    this.counterService.incrementCount(this.count);
    this.count = this.counterService.getCount();

  }

}
