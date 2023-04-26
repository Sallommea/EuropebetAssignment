import { Component, OnInit } from '@angular/core';
import { PrizesService } from '../services/prizes.service';
import { Observable } from 'rxjs';
import { Prize } from '../models/prize.model';
import { BaseTravelCard, TravelCard } from '../models/travel-card.model';
import { TravelCardService } from '../services/travel-card.service';
import { TravelPackage } from '../models/travel-package.model';
import { TravelPackageService } from '../services/travel-package.service';

@Component({
  selector: 'app-final-stage',
  templateUrl: './final-stage.component.html',
  styleUrls: ['./final-stage.component.css'],
})
export class FinalStageComponent {
  prizesObservable: Observable<Prize[]>;
  baseTravelCardObservable: Observable<BaseTravelCard[]>;
  travelCardObservable: Observable<TravelCard[]>;
  travelPackageAObservable: Observable<TravelPackage[]>;
  travelPackageBObservable: Observable<TravelPackage[]>;
  travelPackageCObservable: Observable<TravelPackage[]>;

  constructor(
    private prizedService: PrizesService,
    private travelCardService: TravelCardService,
    private travelPackageService: TravelPackageService
  ) {
    this.prizesObservable = this.prizedService.getPrized();
    this.baseTravelCardObservable = this.travelCardService.getBaseTravelCard();
    this.travelCardObservable = this.travelCardService.getTravelCard();
    this.travelPackageAObservable =
      this.travelPackageService.getTravelPackegeA();
    this.travelPackageBObservable =
      this.travelPackageService.getTravelPackegeB();
    this.travelPackageCObservable =
      this.travelPackageService.getTravelPackegeC();
  }
}
