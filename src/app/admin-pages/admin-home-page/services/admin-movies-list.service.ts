import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMoviesListService {
  private categorieSubject = new BehaviorSubject<Array<string>>([]);
  categories$ = this.categorieSubject.asObservable();
  categories: Array<string> = [];
  allCategories: Array<string> = Array.from({ length: 38 });

  constructor() {
    this.getNextItems();
    this.categorieSubject.next(this.categories);
  }

  loadMore(): void {
    if (this.getNextItems()) {
      this.categorieSubject.next(this.categories);
    }
  }

  getNextItems(): boolean {
    if (this.categories.length >= this.allCategories.length) {
      return false;
    }
    const remainingLength = Math.min(12, this.allCategories.length - this.categories.length);
    this.categories.push(...this.allCategories.slice(this.categories.length, this.categories.length + remainingLength));
    console.log(this.categories.length, this.allCategories.length, remainingLength);
    return true;
  }
}
