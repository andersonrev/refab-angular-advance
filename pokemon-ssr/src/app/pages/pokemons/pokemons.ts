import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { PokemonList } from "./components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Pokemons implements OnInit{


  public isLoading = signal(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 5_000)
  }
}
