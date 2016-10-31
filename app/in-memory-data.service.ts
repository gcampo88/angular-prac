import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Bryce'},
      {id: 12, name: 'Luna'},
      {id: 13, name: 'Bramble'},
      {id: 14, name: 'Colt'},
      {id: 15, name: 'Spot'},
      {id: 16, name: 'Lily'},
      {id: 17, name: 'Charlie'},
      {id: 18, name: 'OtherDog'},
      {id: 19, name: 'Abby'},
      {id: 20, name: 'Penny'}
    ];
    return {heroes};
  }
}
