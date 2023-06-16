import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'a[confirm]'
})
export class ConfirmDirective {

  @Input('confirm-message')
  txt: string = 'SUUUUUU'

  @HostListener('click', ["$event"])
  onClick(event: Event): void {
    const confirm: boolean = window.confirm(this.txt)

    if (!confirm) {
      event.preventDefault()
    }
  }
}
