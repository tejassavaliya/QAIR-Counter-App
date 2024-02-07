import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  count1: number = 0;
  count2: number = 0;
  
  constructor(private counterService: CounterService) {
    this.count1 = this.counterService.getCount();
    this.count2 = this.counterService.getCount();
  }

  incrementCount1(): void {
    this.counterService.incrementCount(this.count1);
    this.count1 = this.counterService.getCount();

  }
  incrementCount2(): void {
    this.counterService.incrementCount(this.count2);
    this.count2 = this.counterService.getCount();

  }
}
