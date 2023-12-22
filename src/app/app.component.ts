import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { Config } from './models/config.interface';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Radon';

  constructor(
    private configService: ConfigService,
    private titleService: Title,
  ) { }

  public ngOnInit() {
    this.initializeCV();
  }

  public initializeCV() {
    this.configService.getConfig().subscribe((config: any) => {
      this.configService.config = config;
      this.title = config.name;
      this.titleService.setTitle(this.title);
    });
  }
}
