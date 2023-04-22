import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { CashGamesComponent } from './cash-games/cash-games.component';
import { SpringSeriesComponent } from './spring-series/spring-series.component';
import { FinalStageComponent } from './final-stage/final-stage.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    CashGamesComponent,
    SpringSeriesComponent,
    FinalStageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
