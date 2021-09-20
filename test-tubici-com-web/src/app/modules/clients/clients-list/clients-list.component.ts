import { Component, OnInit } from '@angular/core';

import { IClient } from './interfaces/client.interface';

import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  public clients: IClient[] = [];
  public client: IClient = null;
  public showInfo: boolean = false;

  constructor(
    private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    this.grtAvailableClients();
  }

  /**
   * @description This method is to prepare clients list to show
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  grtAvailableClients(): void {
    this.clients = this.clientService.getAvailableClients();
  }

  showClientDetail(client: IClient): void {
    this.client = client;
    this.showInfo = true;
  }

  closeClientDetail() {
    this.showInfo = false;
    this.client = null;
  }

}
