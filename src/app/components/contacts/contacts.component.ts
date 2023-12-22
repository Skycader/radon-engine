import { Component, Input } from '@angular/core';
import { Contacts } from '../../models/config.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  @Input() constacts!: Contacts;
}
