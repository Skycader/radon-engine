import { Component, Input } from '@angular/core';
import { Numbers } from '../../models/config.interface';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
})
export class NumbersComponent {
  @Input() numbers: Numbers = {
    experience: '0',
    projects: '0',
    clients: '0',
  };
}
