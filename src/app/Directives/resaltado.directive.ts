import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) {
   

  }
  @Input("appResaltado")nuevocolor:string;

    @HostListener('mouseenter')mousentro(){
      this.el.nativeElement.style.backgroundColor=this.nuevocolor; 
    }
    @HostListener('mouseleave')moussalio(){
      this.el.nativeElement.style.backgroundColor=null; 
    }
}
