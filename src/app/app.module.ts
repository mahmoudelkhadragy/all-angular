import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassGeneratorComponent } from './components/pass-generator/pass-generator.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';
import { TypingComponent } from './components/typing/typing.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ConvertPipe } from './custom-pipes/convert.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AppClassDirective } from './custom-directives/app-class.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { RandomPhotoComponent } from './components/random-photo/random-photo.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { CardInfoComponent } from './components/payment-card/card-info/card-info.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { MathFormComponent } from './components/math-form/math-form.component';
import { AnswerHighlightDirective } from './custom-directives/answer-highlight.directive';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    PassGeneratorComponent,
    HomeComponent,
    CardsComponent,
    CardComponent,
    TypingComponent,
    PipesComponent,
    ConvertPipe,
    PaginationComponent,
    AppClassDirective,
    NotFoundComponent,
    RandomPhotoComponent,
    PaymentCardComponent,
    CardInfoComponent,
    SimpleFormComponent,
    MathFormComponent,
    AnswerHighlightDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
