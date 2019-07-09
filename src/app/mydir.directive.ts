import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective implements OnInit{

  constructor(private el:ElementRef) {
   }
   @Input('appMydir')color :string;

   ngOnInit(){
    
   }
   @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color =this.color;
   }

}
