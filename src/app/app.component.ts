import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Radon';

  constructor(private configService: ConfigService) {}

  public ngOnInit() {
    this.initializeCV();
  }

  public initializeCV() {
    this.configService.getConfig().subscribe((config: any) => {
      this.configService.config = config;
    });
  }
}
