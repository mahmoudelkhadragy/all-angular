import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { PipesComponent } from './components/pipes/pipes.component';
import { TypingComponent } from './components/typing/typing.component';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { PassGeneratorComponent } from './components/pass-generator/pass-generator.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then((m)=> m.ElementsModule)},
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then((m)=> m.CollectionsModule)},
  { path: 'views', loadChildren: () => import('./views/views.module').then((m)=> m.ViewsModule)},
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pass-generator', component: PassGeneratorComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
