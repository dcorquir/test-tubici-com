import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { IClient } from '@app/modules/clients/clients-list/interfaces/client.interface';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  @Input("client") client: IClient;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let client: SimpleChange = changes['product'];
    console.log('client', client);
    if (client !== undefined && client.currentValue !== null) {
      this.client = client.currentValue;
    }
  }

}
