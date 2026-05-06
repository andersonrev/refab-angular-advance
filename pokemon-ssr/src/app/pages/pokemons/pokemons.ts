import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonList } from "./components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { PokemonService } from '../../pokemons/services/pokemon-service';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Pokemons implements OnInit{


  private pokemonService = inject(PokemonService)
  public isLoading = signal(true);
  // private appRef = inject(ApplicationRef)

  // private $appState = this.appRef.isStable.subscribe(isStable => { console.log({isStable})})

  ngOnInit(): void {
    this.loadPokemons()
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2_000)
  }

  public loadPokemons (page = 0 ){
    this.pokemonService.loadPage(page).subscribe(
      pokemons => console.log("On Init")
    )
  }

  // ngOnDestroy(): void {
  //   console.log("destroy")
  //   this.$appState.unsubscribe()
  // }
}
