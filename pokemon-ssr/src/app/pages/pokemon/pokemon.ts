import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import {Pokemon} from '../../pokemons/interfaces'
import { PokemonService } from '../../pokemons/services/pokemon-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonPage implements OnInit {
  
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  public pokemon = signal<Pokemon | null>(null);
  

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;
    
    this.pokemonService.loadPokemon(id).subscribe(this.pokemon.set);
  }

}
