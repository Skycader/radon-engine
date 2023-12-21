import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() content: string[] = [];
  constructor() {}

  ngOnInit() {
    this.content = this.content.map((str: string) =>
      str.length === 0 ? '‎' : str
    );
  }
}
