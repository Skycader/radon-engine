import { Component, Input } from '@angular/core';
import { Project } from '../../models/config.interface';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  @Input() projects: Project[] = [];
}
