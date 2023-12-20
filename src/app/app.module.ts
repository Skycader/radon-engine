import { NgModule, isDevMode } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BlockComponent } from './components/block/block.component';
import { InfoComponent } from './components/info/info.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectBlockComponent } from './components/project-block/project-block.component';
import { SkillBlockComponent } from './components/skill-block/skill-block.component';
import { SkillComponent } from './components/skill/skill.component';
import { TextComponent } from './components/text/text.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BlockComponent,
    TextComponent,
    NavbarComponent,
    SkillComponent,
    SkillBlockComponent,
    ProjectBlockComponent,
    MainPageComponent,
    FooterComponent,
    WelcomeMessageComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
