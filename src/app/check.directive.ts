import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective {

  constructor(private el:ElementRef) { }
@Input('appCheck') color:string
@HostListener('mouseleave') onMouseLeave(){
  this.el.nativeElement.style.color=this.color;
}

}
