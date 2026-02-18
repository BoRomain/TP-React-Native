import Food from "./Food";

export default class Meal {
  name: string;
  type: string;
  date: string;
  foods: Food[];
  constructor() {
    this.name = "";
    this.type = "";
    this.date = "";
    this.foods = [];
  }
}
