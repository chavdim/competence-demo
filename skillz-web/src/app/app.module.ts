import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SkillComponent } from './skill/skill.component';
import { HeaderComponent } from './header/header.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { UserInfoComponent } from './user-info/user-info.component';
import { QuaterSelectionComponent } from './quater-selection/quater-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsPageComponent,
    SkillComponent,
    HeaderComponent,
    UserInfoComponent,
    QuaterSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    ChartsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
