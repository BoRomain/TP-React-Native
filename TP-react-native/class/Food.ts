export default class Food {
  id: string;
  name: string;
  brand: string;
  image_url: string;
  nutriscore: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  constructor() {
    this.id = new Date().getTime().toString();
    this.name = "";
    this.brand = "";
    this.image_url = "";
    this.nutriscore = "";
    this.calories = 0;
    this.proteins = 0;
    this.carbs = 0;
    this.fats = 0;
  }
}
