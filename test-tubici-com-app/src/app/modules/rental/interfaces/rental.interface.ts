import { IInventory } from "../../inventory/interfaces/inventory.interface";

export interface IRental {
  id: number,
  clientId: number,
  bike: IInventory,
  initDate: Date,
  endDate: Date,
  total: number
}