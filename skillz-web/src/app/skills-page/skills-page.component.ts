import {Component} from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {

  skills: any;

  constructor() {
    this.skills = [{newCount: 2, name: 'Frontend', description: 'awesome skill', level: 3, level0: 2, tags: ['Angular', 'Material', 'Typescript'] },
      {newCount: 3, name: 'Infrastructure', description: 'awesome skill', level: 3, level0: 1, tags: ['CI/CD', 'Serverless', 'Terraform', 'AWS']},
      {newCount:"", name: 'Backend', description: 'awesome skill', level: 0, level0: 8, tags: ['Scala', 'Play']}];
  }
 }
