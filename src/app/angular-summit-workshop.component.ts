import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { TeamComponent } from './+team';
import { DetailComponent } from './+detail';
import { TeamService } from './shared'

@Component({
  moduleId: module.id,
  selector: 'angular-summit-workshop-app',
  templateUrl: 'angular-summit-workshop.component.html',
  styleUrls: ['angular-summit-workshop.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS,TeamService]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/team', component: TeamComponent},
  {path: '/detail/:id', component: DetailComponent}
])
export class AngularSummitWorkshopAppComponent {
  title = 'Angular Summit Workshop!';
}
