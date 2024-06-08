export class Recepie {
    constructor(public _id: number, public name: string, public instructions: [String], public ingredients: [{name: string, amount: number}]) {
    }
  }