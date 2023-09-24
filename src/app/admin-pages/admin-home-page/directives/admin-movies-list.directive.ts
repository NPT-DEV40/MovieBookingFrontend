import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAdminMoviesList]'
})
export class AdminMoviesListDirective {
  @Output() scrollingFinished = new EventEmitter<void>(); // Lắng nghe sự kiện truyền vào từ lớp cha

  emitted = false;

  @HostListener('window:scroll', [])
  onScroll():void {
    console.log(window.innerHeight, window.scrollY, document.body.offsetHeight);
    if((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight && !this.emitted) {
      this.emitted = true;
      this.scrollingFinished.emit();
      console.log(this.emitted);
    } else if((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      this.emitted = false;
    }
  }
}
