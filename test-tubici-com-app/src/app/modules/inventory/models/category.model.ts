import { ICategory } from '../interfaces/category.interface';

export class CategoryModel implements ICategory{

  constructor(
    public id: number,
    public description: string
  ) { }

}
