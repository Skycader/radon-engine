import { Component, Input } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() content: string[] = [];
  constructor() { }
}
