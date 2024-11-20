import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PokemonListComponent },
      { path: 'pokemon/:id', component: PokemonDetailComponent },
    ])
  ],
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ]
})
export class PokemonModule { }
