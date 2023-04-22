import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-table',
  templateUrl: './leaderboard-table.component.html',
  styleUrls: ['./leaderboard-table.component.css'],
})
export class LeaderboardTableComponent implements OnInit {
  data = [
    {
      place: 3,

      voucher: '1 500 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 4,

      voucher: '1 200 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 5,

      voucher: '1000 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 6,

      voucher: '800 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 7,
      voucher: '500 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 8,
      voucher: '400 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 9,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 10,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 11,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 12,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 13,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 14,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 15,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 16,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 18,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 19,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
    {
      place: 20,
      voucher: '300 ₾',
      prize: 'სპეც. ტურნირის ბილეთი',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
