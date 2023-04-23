import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LeaderboardTableComponent } from './leaderboard-table/leaderboard-table.component';
import { RouterModule } from '@angular/router';
import { CustomRowComponent } from './custom-row/custom-row.component';
import { WrapperBComponent } from './wrapper-b/wrapper-b.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ButtonComponent } from './button/button.component';
import { WrapperAComponent } from './wrapper-a/wrapper-a.component';
import { PrizesComponent } from './prizes/prizes.component';

@NgModule({
  declarations: [
    LeaderboardTableComponent,
    CustomRowComponent,
    WrapperBComponent,
    AccordionComponent,
    CarouselComponent,
    ButtonComponent,
    WrapperAComponent,
    PrizesComponent,
  ],
  imports: [CommonModule, BrowserModule],
  exports: [
    LeaderboardTableComponent,
    CustomRowComponent,
    WrapperBComponent,
    AccordionComponent,
    CarouselComponent,
    ButtonComponent,
    WrapperAComponent,
    PrizesComponent,
  ],
})
export class SharedModule {}
