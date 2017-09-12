import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from './game.service'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    Updated upstream
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    AppComponent,
    ProfileComponent,
    GameListComponent,
  ],
  providers: [
    UserService,
    GameService
    Stashed changes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
