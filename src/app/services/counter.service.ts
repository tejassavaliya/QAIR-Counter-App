import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  private count: number = 0;

  constructor() { 
    console.log('CounterService created', this.count);
  }

  getCount(): number {
    return this.count;
  }

  incrementCount(count: number): void {
    this.count = ++count
  }

  isReachedMax(): boolean {
    return this.count >= 10;
  }
}
