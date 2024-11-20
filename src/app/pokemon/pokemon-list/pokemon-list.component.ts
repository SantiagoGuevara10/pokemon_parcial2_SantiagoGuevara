import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemons = response.results.map((pokemon: any) => {
        const id = pokemon.url.split('/').filter(Boolean).pop();
        return { ...pokemon, id }; 
      });
    });
  }
}