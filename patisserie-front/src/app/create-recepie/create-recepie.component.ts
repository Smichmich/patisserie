import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { RecepiesServiceService } from '../recepies-service.service';

@Component({
  selector: 'app-create-recepie',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './create-recepie.component.html',
  styleUrl: './create-recepie.component.css'
})
export class CreateRecepieComponent {

constructor(private router: Router, private recepieService: RecepiesServiceService) {}

  recepieName: string = '';
  recepieInstructions: string[] = [];
  recepieIngredients: any[] = [];

  instructionToAdd: string = '';
  ingredientNameToAdd: string = '';
  ingredientAmountToAdd: number = 0;

  addInstruction() {
    this.recepieInstructions.push(this.instructionToAdd);
    this.instructionToAdd = '';
  }

  addIngredient() {
    if(this.ingredientAmountToAdd !== 0 && this.ingredientNameToAdd !== '') {
      this.recepieIngredients.push(
        {name: this.ingredientNameToAdd, amount: this.ingredientAmountToAdd}
      );
      this.ingredientAmountToAdd = 0;
      this.ingredientNameToAdd = '';
    }
  }

  saveRecepie() {
    if(this.recepieName !== '' && this.recepieIngredients.length !== 0 && this.recepieInstructions.length !== 0) {
      const newRecepie = {
        name: this.recepieName,
        instructions: this.recepieInstructions,
        ingredients: this.recepieIngredients
      }
      this.recepieService.saveRecepie(newRecepie).subscribe(() => {
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
