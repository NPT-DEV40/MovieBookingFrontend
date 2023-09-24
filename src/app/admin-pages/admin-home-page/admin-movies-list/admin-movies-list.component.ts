import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { AdminMoviesListService } from '../services/admin-movies-list.service';

@Component({
  selector: 'app-admin-movies-list',
  templateUrl: './admin-movies-list.component.html',
  styleUrls: ['./admin-movies-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class AdminMoviesListComponent   {
  @Output() scrollingFinished = new EventEmitter<void>();
  @Input() categories?: Array<string> | null;

  constructor(private adminHomeService: AdminMoviesListService) {}

  onScrollingFinished(): void {
    this.scrollingFinished.emit();
  }

  @HostListener('window:scroll', [])
  ScrollIconsEnabled() {
    console.log(this.adminHomeService.categories.length, this.adminHomeService.allCategories.length);
    if(this.adminHomeService.categories.length >= this.adminHomeService.allCategories.length) {
      document.getElementsByClassName('arrow-down')[0].setAttribute('style', 'visibility: hidden');
    } else {
      document.getElementsByClassName('arrow-down')[0].setAttribute('style', 'visibility: visible');
    }
  }
}





