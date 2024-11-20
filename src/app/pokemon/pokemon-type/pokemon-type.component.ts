import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
})
export class PokemonTypeComponent implements OnInit {
  pokemons: any[] = [];
  type: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.loadPokemonByType();
  }

  loadPokemonByType(): void {
    
  }
}
