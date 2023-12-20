import {
  Component,
  ElementRef,
  Host,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  public tiltDeg = 1;
  @ViewChild('pane') pane: any;
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
  }

  constructor(private el: ElementRef) { }

  ngOnInit() { }
}
