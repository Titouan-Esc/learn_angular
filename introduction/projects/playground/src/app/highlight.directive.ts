import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'p[highlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.elementRef.nativeElement.style.color = "yellow"
  }

  @HostListener('mouseout')
  onMouseLeave(): void {
    this.elementRef.nativeElement.style.color = 'white'
  }
}


