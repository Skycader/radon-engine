import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  public tiltDeg = 3;
  @ViewChild('pane') pane: any;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    this.pane.nativeElement.style['transition-duration'] = '0.2s';
    setTimeout(() => {
      this.pane.nativeElement.style['transition-duration'] = null;
    }, 200);
  }
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: any) {
    const { clientX, clientY } = event;
    const bcr =
      this.el.nativeElement.firstElementChild.firstElementChild.getBoundingClientRect();
    const rotX = -(((clientY - bcr.top) / bcr.height) * 2 - 1) * this.tiltDeg;
    const rotY = -(((clientX - bcr.left) / bcr.width) * 2 - 1) * -this.tiltDeg;

    this.pane.nativeElement.firstElementChild!.style!.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: any) {
    this.pane.nativeElement.firstElementChild.style.transform = `rotateX(0deg) rotateY(0deg)`;
    this.pane.nativeElement.style['transition-duration'] = '0.2s';
    setTimeout(() => {
      this.pane.nativeElement.style['transition-duration'] = null;
    }, 200);
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {}
}
