import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { PipesComponent } from './components/pipes/pipes.component';
import { TypingComponent } from './components/typing/typing.component';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { PassGeneratorComponent } from './components/pass-generator/pass-generator.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RandomPhotoComponent } from './components/random-photo/random-photo.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { MathFormComponent } from './components/math-form/math-form.component';

const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then((m)=> m.ElementsModule)},
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then((m)=> m.CollectionsModule)},
  { path: 'views', loadChildren: () => import('./views/views.module').then((m)=> m.ViewsModule)},
  { path: 'mods', loadChildren: () => import('./mods/mods.module').then((m)=> m.ModsModule)},
  { path: 'search', loadChildren: () => import('./search/search.module').then((m)=> m.SearchModule)},
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pass-generator', component: PassGeneratorComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'randomphoto', component: RandomPhotoComponent },
  { path: 'paymentcard', component: PaymentCardComponent },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: 'math-form', component: MathFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
