import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'admin', password: '123456' },
      { id: 2, name: 'a', password: '1' },
      { id: 3, name: 'ad', password: '12' },
    ];
    return {users};
  }
}
