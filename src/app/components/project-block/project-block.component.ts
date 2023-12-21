import { Component, Input } from '@angular/core';
import { Project } from '../../models/config.interface';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrl: './project-block.component.scss',
})
export class ProjectBlockComponent {
  @Input() project!: Project;
}
