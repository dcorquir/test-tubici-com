import { IInventory } from "../../inventory/interfaces/inventory.interface";
import { IRental } from '../interfaces/rental.interface';

export class RentalModel implements IRental{

  constructor(
    public id: number,
    public clientId: number,
    public bike: IInventory,
    public initDate: Date,
    public endDate: Date,
    public total: number
  ) { }

}
