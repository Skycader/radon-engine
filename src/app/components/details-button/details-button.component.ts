import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrl: './details-button.component.scss',
})
export class DetailsButtonComponent {
  @Input() detailsUrl: string | undefined = '';
}
