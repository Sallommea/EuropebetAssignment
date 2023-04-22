import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardTableComponent } from './leaderboard-table/leaderboard-table.component';
import { RouterModule } from '@angular/router';
import { CustomRowComponent } from './custom-row/custom-row.component';

@NgModule({
  declarations: [LeaderboardTableComponent, CustomRowComponent],
  imports: [CommonModule],
  exports: [LeaderboardTableComponent, CustomRowComponent],
})
export class SharedModule {}
