import { Component } from '@angular/core';
import { PokemonCard } from "../pokemon-card/pokemon-card";

@Component({
  selector: 'pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {

}
