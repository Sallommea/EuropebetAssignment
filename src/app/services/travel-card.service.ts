import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseTravelCard, TravelCard } from '../models/travel-card.model';

@Injectable({
  providedIn: 'root',
})
export class TravelCardService {
  getBaseTravelCard(): Observable<BaseTravelCard[]> {
    return of([
      {
        showImage: true,
        shortDescriptionTitle: '"Cashgame HighRollers"-',
        shortDescription: '1 საგზური',
      },
      {
        showImage: true,
        shortDescriptionTitle: '"Cashgame Grinders"-',
        shortDescription: '1 საგზური',
      },
      {
        showImage: true,
        shortDescriptionTitle: '"Cashgame Sharks"-',
        shortDescription: '1 საგზური',
      },
    ]);
  }

  getTravelCard(): Observable<TravelCard[]> {
    return of([
      {
        showImage: false,
        shortDescriptionTitle: 'Poker Legends Philippines',
        shortDescription: 'A კატეგორიის 1 საგზური',
        shortDescription2: 'B კატეგორიის 1 საგზური',
        shortDescription3: 'ტურნირში მონაწილეობის მიღება შეუძლია',
        shortDescription4: 'ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.',
      },
      {
        showImage: true,
        shortDescriptionTitle: 'The Lord of the Rings',
        shortDescription: 'C კატეგორიის 1 საგზური',
        shortDescription2: '',
        shortDescription3: 'ტურნირში მონაწილეობის მიღება შეუძლია',
        shortDescription4: 'ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.',
      },
    ]);
  }
}
