import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// export class CounterService {
//   counter: number = 0;
//   constructor() { }

//   increaseCounter() {
//     this.counter++;
//   }
//   getCounter(){
//     return this.counter;
//   }
//   isCounterReached() {
//     return this.counter >= 10;
//   }


// }

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

  decrementCount(): void {
    this.count--;
  }

  resetCount(): void {
    this.count = 0;
  }

  isReachedMax(): boolean {
    return this.count >= 10;
  }
}
