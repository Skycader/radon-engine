import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTilt]',
})
export class TiltDirective {
  public tiltDeg = 1;
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: any) {
    const { clientX, clientY } = event;
    const bcr = this.pane.nativeElement.getBoundingClientRect();
    const rotX = -(((clientY - bcr.top) / bcr.height) * 2 - 1) * this.tiltDeg;
    const rotY = -(((clientX - bcr.left) / bcr.width) * 2 - 1) * -this.tiltDeg;

    this.pane.nativeElement.style!.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: any) {
    this.pane.nativeElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }
  constructor(public pane: ElementRef) {}
}
