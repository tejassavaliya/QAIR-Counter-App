import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  count: number = 0;

  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount();
  }

  incrementCount(): void {
    this.counterService.incrementCount(this.count);
    this.count = this.counterService.getCount();
  }
}
