import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Game } from './game/game';
import { GAMES } from './game/mock-game';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

constructor() { }
  getGames(): Game[]{
    return GAMES;
  }
}
