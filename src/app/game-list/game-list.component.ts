import { Component, OnInit } from '@angular/core';
import { Game } from '../game/game';
import { GameService } from '../game.service'


@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.component.html',
  // styleUrls: [ '' ]

})
export class GameListComponent implements OnInit {

  Games: Game[] = [];

  constructor(private gameService:GameService){

  }
  ngOnInit(){
    this.Games = this.gameService.getGames();
  }
}
