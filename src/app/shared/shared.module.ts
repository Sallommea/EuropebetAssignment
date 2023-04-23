import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LeaderboardTableComponent } from './leaderboard-table/leaderboard-table.component';
import { RouterModule } from '@angular/router';
import { CustomRowComponent } from './custom-row/custom-row.component';
import { WrapperBComponent } from './wrapper-b/wrapper-b.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    LeaderboardTableComponent,
    CustomRowComponent,
    WrapperBComponent,
    AccordionComponent,
  ],
  imports: [CommonModule, BrowserModule],
  exports: [
    LeaderboardTableComponent,
    CustomRowComponent,
    WrapperBComponent,
    AccordionComponent,
  ],
})
export class SharedModule {}
