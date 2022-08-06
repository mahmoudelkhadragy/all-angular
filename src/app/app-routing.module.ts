import { TypingComponent } from './components/typing/typing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { PassGeneratorComponent } from './components/pass-generator/pass-generator.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'pass-generator', component: PassGeneratorComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'typing', component: TypingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
