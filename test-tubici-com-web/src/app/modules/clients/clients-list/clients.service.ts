import { Injectable } from '@angular/core';

import { IClient } from './interfaces/client.interface';

import { clientsListMock } from '../../../shared/mocks/clients.mock';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  /**
   * @description This method is to send request to get clients list
   * 
   * @author Diego Mauricio Cortés
   * @print 1
   */
  getAvailableClients(): IClient[] {
    return clientsListMock;
  }
}
