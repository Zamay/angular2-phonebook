import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phonebook = [
      { id: 1,  firstName: 'firstName 1', secondName: 'secondName 1', phone: '1', address: 'address 1', createAt: 1232253221 },
      { id: 2,  firstName: 'firstName 2', secondName: 'secondName 2', phone: '2', address: 'address 2', createAt: 1232253221 },
      { id: 3,  firstName: 'firstName 3', secondName: 'secondName 3', phone: '3', address: 'address 3', createAt: 1232253221 },
      { id: 4,  firstName: 'firstName 4', secondName: 'secondName 4', phone: '4', address: 'address 4', createAt: 1232253221 },
      { id: 5,  firstName: 'firstName 5', secondName: 'secondName 5', phone: '5', address: 'address 5', createAt: 1232253221 },
      { id: 6,  firstName: 'firstName 6', secondName: 'secondName 6', phone: '6', address: 'address 6', createAt: 1232253221 },
      { id: 7,  firstName: 'firstName 7', secondName: 'secondName 7', phone: '7', address: 'address 7', createAt: 1232253221 },
      { id: 8,  firstName: 'firstName 8', secondName: 'secondName 8', phone: '8', address: 'address 8', createAt: 1232253221 },
      { id: 9,  firstName: 'firstName 9', secondName: 'secondName 9', phone: '9', address: 'address 9', createAt: 1232253221 },
    ];
    return {phonebook};
  }
}

