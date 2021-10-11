import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.accentuate('purple');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.accentuate('black');
  }
  private accentuate(action:string){
    this.elem.nativeElement.style.color=action;
  }

}
