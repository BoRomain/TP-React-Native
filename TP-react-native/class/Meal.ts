import Food from "./Food";

export default class Meal {
  id: string;
  name: string;
  type: string;
  date: string;
  foods: Food[];
  constructor() {
    this.id = new Date().getTime().toString();
    this.name = "";
    this.type = "";
    this.date = "";
    this.foods = [];
  }
}
