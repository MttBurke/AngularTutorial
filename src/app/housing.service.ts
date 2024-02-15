import { Injectable } from '@angular/core';
import { HousingLocation } from "./housingLocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa'

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Test Home',
      city: 'Test city',
      postcode: 'AB',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      units: 1,
      wifi: true,
    },
    {
      id: 1,
      name: 'Some house',
      city: 'City A',
      postcode: 'AB12',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      units: 2,
      wifi: true,
    },
    {
      id: 2,
      name: '123 Street',
      city: 'City A',
      postcode: 'AB12',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      units: 1,
      wifi: true,
    },
    {
      id: 3,
      name: '123 Place',
      city: 'City B',
      postcode: 'BB12',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      units: 3,
      wifi: true,
    },
    {
      id: 4,
      name: 'Apartments',
      city: 'City B',
      postcode: 'BB12',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      units: 2,
      wifi: true,
    },
    {
      id: 5,
      name: 'Group',
      city: 'Somewhere',
      postcode: '1234',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      units: 2,
      wifi: true
    },
    {
      id: 6,
      name: '123 Town',
      city: 'Somewhere',
      postcode: '1234',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      units: 5,
      wifi: true
    },
    {
      id: 7,
      name: 'Houses',
      city: 'City',
      postcode: 'AB12',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      units: 2,
      wifi: true
    }
  ];

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
