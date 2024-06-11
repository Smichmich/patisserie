import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-recepie',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './create-recepie.component.html',
  styleUrl: './create-recepie.component.css'
})
export class CreateRecepieComponent {

constructor(private http: HttpClient, private router: Router) {}

  recepieName: String = '';
  recepieInstructions: String[] = [];
  recepieIngredients: any[] = [];

  instructionToAdd: String = '';
  ingredientNameToAdd: String = '';
  ingredientAmountToAdd: Number = 0;

  addInstruction() {
    this.recepieInstructions.push(this.instructionToAdd);
    this.instructionToAdd = '';
  }

  addIngredient() {
    this.recepieIngredients.push(
      {name: this.ingredientNameToAdd, amount: this.ingredientAmountToAdd}
    );
    this.ingredientAmountToAdd = 0;
    this.ingredientNameToAdd = '';
  }

  saveRecepie() {
    if(this.recepieName && this.recepieIngredients && this.recepieInstructions) {
      const newRecepie = {
        name: this.recepieName,
        instructions: this.recepieInstructions,
        ingredients: this.recepieIngredients
      }
      this.http.post<any>('/v1/recepies/add', newRecepie).subscribe((res) => {
        this.resetForm();
        this.router.navigate(['/recepies'])
      })
    }
  }

  removeIngredient(index: number) {
    this.recepieIngredients.splice(index, 1);
  }

  removeInstruction(index: number) {
    this.recepieInstructions.splice(index, 1);
  }

  resetForm() {
    this.recepieName = '';
    this.ingredientAmountToAdd = 0;
    this.ingredientNameToAdd = '';
    this.instructionToAdd = '';
    this.recepieIngredients = [];
    this.recepieInstructions = [];
  }
}
