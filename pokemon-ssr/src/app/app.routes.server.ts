import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { PokemonService } from './pokemons/services/pokemon-service';

export const serverRoutes: ServerRoute[] = [
  {
    path: "pokemons/page/:page",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{page: "1"}];
    },
  },
  {
    path: "pokemons/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{id: "1"}, {id: "aerodactyl"}];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
