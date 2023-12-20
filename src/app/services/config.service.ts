import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/config.interface';

/**
 * Service to get the config file
 * which resides in the assets folder
 */
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public config: Config = {
    name: 'Your name',
  };
  constructor(private http: HttpClient) {}

  public getConfig() {
    return this.http.get(`assets/config/config.json`);
  }
}
