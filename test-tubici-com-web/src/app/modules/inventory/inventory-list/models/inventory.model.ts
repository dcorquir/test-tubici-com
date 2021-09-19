import { IInventory } from '../interfaces/inventory.interface';

export class InventoryModel implements IInventory{

  constructor(
    public id: number,
    public bikeName: string,
    public bikeImageUrl: string,
    public bikeDescription: string,
    public bikeTypeId: number,
    public bikeType: string,
    public bikeCategoryId: number,
    public bikeCategory: string,
    public bikePrice: number,
    public bikeInventoryStatus: string,
    public bikeRating: number
  ) {}

}
