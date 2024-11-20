import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
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
    this.loadPokemonsByType();
  }

  loadPokemonsByType(): void {
    this.pokemonService.getPokemonsByType(this.type).subscribe((response) => {
      this.pokemons = response.pokemon.map((p: any) => p.pokemon); 
    });
  }
}
