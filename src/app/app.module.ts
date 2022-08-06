import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassGeneratorComponent } from './components/pass-generator/pass-generator.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';
import { TypingComponent } from './components/typing/typing.component';


@NgModule({
  declarations: [
    AppComponent,
    PassGeneratorComponent,
    HomeComponent,
    CardsComponent,
    CardComponent,
    TypingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
