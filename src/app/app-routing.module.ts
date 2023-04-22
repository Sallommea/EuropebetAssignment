import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CashGamesComponent } from './cash-games/cash-games.component';
import { SpringSeriesComponent } from './spring-series/spring-series.component';
import { FinalStageComponent } from './final-stage/final-stage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: CashGamesComponent },
      { path: 'springseries', component: SpringSeriesComponent },
      { path: 'finalstage', component: FinalStageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
