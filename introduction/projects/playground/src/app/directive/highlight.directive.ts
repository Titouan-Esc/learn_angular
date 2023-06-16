import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: 'p[highlight]'
})
export class HighlightDirective {

  ngOnInit() {
    this.color = this.baseColor
  }

  // Binding the selector to style.color for this example
  @HostBinding('style.color')
  color: string = 'white'

  // Create new attribue
  @Input('txt-color')
   txtColor: string= 'yellow'

  @Input('base-color')
  baseColor: string = 'white'

  // Events
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.color = this.txtColor
  }

  @HostListener('mouseout')
  onMouseLeave(): void {
    this.color = this.baseColor
  }
}


