import { Component, HostListener } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public currentScroll: number = 0;
  public hideNavbar: boolean = false;

  @HostListener('window:scroll', ['$event.target'])
  onScroll() {
    this.hideNavbar = window.scrollY > this.currentScroll ? true : false;
    this.currentScroll = window.scrollY;
  }

  constructor(public configService: ConfigService) { }
}
