import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrl: './skill-block.component.scss',
})
export class SkillBlockComponent {
  @Input() skills: string[] = [];
}
