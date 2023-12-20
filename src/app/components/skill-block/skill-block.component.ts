import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrl: './skill-block.component.scss',
})
export class SkillBlockComponent {
  public skills: string[] = [
    'JS',
    'CSS',
    'ANGULAR',
    'DOCKER',
    'JEST',
    'JS',
    'CSS',
    'ANGULAR',
    'DOCKER',
    'JEST',
  ];
}
