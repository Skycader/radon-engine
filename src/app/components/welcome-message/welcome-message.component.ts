import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrl: './welcome-message.component.scss',
})
export class WelcomeMessageComponent {
  constructor(public configService: ConfigService) {}
}
