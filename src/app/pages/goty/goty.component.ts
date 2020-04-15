import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

import { Game } from '../../interfaces/interfaces';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor( private _gameService: GameService ) { }

  ngOnInit() {
    this.getNominados();
  }

  getNominados() {
    this._gameService.getNominados().subscribe( games =>  {
      this.juegos = games;
    });
  }

  votarJuego( juego: Game ) {

    this._gameService.votarJuego( juego.id ).subscribe( resp => {
      if ( resp.ok ) {
        Swal.fire('Gracias', resp.mensaje, 'success');
      } else {
        Swal.fire('Ooops', resp.mensaje, 'error');
      }
    });

  }

}
