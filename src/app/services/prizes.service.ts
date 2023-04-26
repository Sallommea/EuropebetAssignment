import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Prize } from '../models/prize.model';

@Injectable({
  providedIn: 'root',
})
export class PrizesService {
  getPrized(): Observable<Prize[]> {
    return of([
      { id: '1', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '2', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '3', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '4', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '5', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '6', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '7', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '8', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '9', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '10', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '11', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '12', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '13', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '14', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '15', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '16', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '17', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '18', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '19', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
      { id: '20', prize: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი' },
    ]);
  }
}
