import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LeaderboardTableComponent } from './leaderboard-table/leaderboard-table.component';
import { RouterModule } from '@angular/router';
import { CustomRowComponent } from './custom-row/custom-row.component';
import { WrapperBComponent } from './wrapper-b/wrapper-b.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WrapperAComponent } from './wrapper-a/wrapper-a.component';
import { PrizesComponent } from './prizes/prizes.component';
import { CardComponent } from './card/card.component';
import { TravelCardComponent } from './travel-card/travel-card.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    LeaderboardTableComponent,
    CustomRowComponent,
    WrapperBComponent,
    AccordionComponent,
    CarouselComponent,
    WrapperAComponent,
    PrizesComponent,
    CardComponent,
    TravelCardComponent,
    AccordionItemComponent,
  ],
  imports: [CommonModule, BrowserModule],
  exports: [
    LeaderboardTableComponent,
    CustomRowComponent,
    WrapperBComponent,
    AccordionComponent,
    CarouselComponent,
    WrapperAComponent,
    PrizesComponent,
    CardComponent,
    TravelCardComponent,
  ],
})
export class SharedModule {}
