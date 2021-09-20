import { IClient } from '../interfaces/client.interface';

export class ClientModel implements IClient{

  constructor(
    public id: number,
    public clientName: string,
    public clientEmail: string,
    public clientImageUrl: string,
    public clientPoints: number
  ) {}

}
