import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { PokemonService } from '../../pokemons/services/pokemon-service';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList, PokemonListSkeleton, RouterLink],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Pokemons{

  private pokemonService = inject(PokemonService)
  public pokemons = signal<SimplePokemon[]>([])

  private route = inject(ActivatedRoute)
  private router = inject(Router)

  private title = inject(Title)


  public currentPage = toSignal<number>(
    this.route.params.pipe(
      map( params => params['page'] ?? '1'),
      map(page => ( isNaN(+page) ? 1 : +page)),
      map( page => Math.max(1, page))
    )
  )

  public loadOnPageChanged = effect(() => {
    console.log('Pagina cambio', this.currentPage())
    this.loadPokemons(this.currentPage())
  },
)
  public loadPokemons (page = 0 ){

    const pageToLoad = this.currentPage() ! + page;

    this.pokemonService.loadPage(pageToLoad)
    .pipe(
      tap(() => this.title.setTitle(`Pokemons SSR - Page ${pageToLoad}`))
    ).
    subscribe(
      pokemons => {
        this.pokemons.set(pokemons)
      }
    )
  }
}
